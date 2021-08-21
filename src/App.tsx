import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import Layout from "./Components/Layout";
import useInput from "./Hooks/useInput";
import BookmarkList from "./Components/BookmarkList";

function App() {
    const currentBookmark = useInput("");
    const [bookmarks, setBookmarks] = useState<chrome.bookmarks.BookmarkTreeNode[]>([]);

    useEffect(() => {
        const searchBookmark = async () => {
            if (chrome.bookmarks?.search) {
                const result = await chrome.bookmarks.search(currentBookmark.value);
                setBookmarks(result || []);
                console.log(result);
            }
        };
        searchBookmark();
    }, [currentBookmark.value]);
    return (
        <>
            <Layout>
                <SearchBar currentBookmark={currentBookmark} />
                <BookmarkList bookmarks={bookmarks} />
            </Layout>
        </>
    );
}

export default App;
