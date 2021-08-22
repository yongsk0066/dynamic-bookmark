import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import Layout from "./Components/Layout";
import useInput from "./Hooks/useInput";
import BookmarkList from "./Components/BookmarkList";
import { Bookmark } from "./types/bookmark.types";
import Selected from "./Components/Selected";
import { dateRegExp } from "./utils/regex";
import { RegResult } from "./Components/BookmarkList/BookmarkList.styles";
import { formattedWeekDate } from "./utils/date";

function App() {
    const currentBookmark = useInput("");
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [savedBookmark, setSavedBookmark] = useState<Bookmark>();
    const [validate, setValidate] = useState<string>("");

    useEffect(() => {
        const searchBookmark = async () => {
            // for run on local without extension api
            if (chrome.bookmarks?.search) {
                const result = await chrome.bookmarks.search(currentBookmark.value);
                setBookmarks(result || []);
                console.log(result);
            }
        };
        searchBookmark();
    }, [currentBookmark.value]);

    useEffect(() => {
        //first time
        if (chrome?.storage) {
            chrome.storage.sync.get(["targetBookmark"], (result) => {
                const data = result?.targetBookmark;
                console.log(data);
                setSavedBookmark(data);
            });
            chrome.storage.onChanged.addListener(({ targetBookmark }) => {
                console.log(targetBookmark.newValue.url);
                const result = dateRegExp.test(targetBookmark.newValue.url);
                if (!result) {
                    setValidate("맞지 않는 url입니다.");
                } else {
                    setValidate("적합한 url입니다.");
                }
                setSavedBookmark(targetBookmark.newValue);
            });
        }
    }, []);

    return (
        <>
            <Layout>
                <Selected content={savedBookmark} />
                <span>{formattedWeekDate()}</span>
                <RegResult>{validate}</RegResult>
                <SearchBar currentBookmark={currentBookmark} />
                <BookmarkList bookmarks={bookmarks} />
            </Layout>
        </>
    );
}
export default App;
