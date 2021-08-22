import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "./Components/SearchBar";
import Layout from "./Components/Layout";
import useInput from "./Hooks/useInput";
import BookmarkList from "./Components/BookmarkList";
import { Bookmark } from "./types/bookmark.types";
import Selected from "./Components/Selected";
import { dateRegExp, updateUrl } from "./utils/regex";
import { RegResult, Button } from "./Components/BookmarkList/BookmarkList.styles";
import { formattedWeekDate } from "./utils/date";

function App() {
    const currentBookmark = useInput("");
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [savedBookmark, setSavedBookmark] = useState<Bookmark>();
    const [validate, setValidate] = useState<string>("");

    const handleClick = useCallback(async () => {
        const url = savedBookmark?.url as string;
        const id = savedBookmark?.id as string;
        const testResult = dateRegExp.test(url);
        if (testResult) {
            const newUrl = updateUrl(url, formattedWeekDate());
            const check = await chrome.bookmarks.update(id, {
                url: newUrl,
            });
            console.log(check);
        } else {
            setValidate("업데이트 할 수 없습니다.");
        }
    }, [savedBookmark?.id, savedBookmark?.url]);

    useEffect(() => {
        const searchBookmark = async () => {
            // for run on local without extension api
            if (chrome.bookmarks?.search) {
                const result = await chrome.bookmarks.search(currentBookmark.value);
                setBookmarks(result || []);
            }
        };
        searchBookmark();
    }, [currentBookmark.value]);

    useEffect(() => {
        //first time
        if (chrome?.storage) {
            // get bookmark from storage
            chrome.storage.sync.get(["targetBookmark"], (result) => {
                const data = result?.targetBookmark;
                setSavedBookmark(data);
            });
            //update target bookmark
            chrome.storage.onChanged.addListener(({ targetBookmark }) => {
                const result = dateRegExp.test(targetBookmark.newValue.url);
                if (!result) {
                    setValidate("맞지 않는 url입니다.");
                } else {
                    setValidate("적합한 url입니다.");
                }
                setSavedBookmark(targetBookmark.newValue);
            });
            // alarm listener
            chrome.alarms.onAlarm.addListener((r) => {
                handleClick();
            });
        }
    }, [handleClick]);

    return (
        <>
            <Layout>
                <Selected content={savedBookmark} />
                {validate && <RegResult>{validate}</RegResult>}
                <Button onClick={handleClick}>수동 업데이트</Button>
                <SearchBar currentBookmark={currentBookmark} />
                <BookmarkList bookmarks={bookmarks} />
            </Layout>
        </>
    );
}
export default App;
