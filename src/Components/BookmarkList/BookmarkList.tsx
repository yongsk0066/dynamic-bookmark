import React from "react";
import { Bookmark } from "../../types/bookmark.types";
import { Ul, Li } from "./BookmarkList.styles";

const BookmarkList = ({ bookmarks }: { bookmarks: Bookmark[] }) => {
    const handleClick = (b: Bookmark) => {
        console.log("call click event");
        chrome.storage.sync.set({ targetBookmark: b }, () => {
            console.log(`set bookmark at storage (${b})`);
        });
    };

    return (
        <Ul>
            {bookmarks.map((b: Bookmark, i: number) => (
                <Li onClick={() => handleClick(b)}>{b.title}</Li>
            ))}
            {/* {dummyData.map((b: Bookmark, i: any) => (
                <Li key={b.id}>{b.title}</Li>
            ))} */}
        </Ul>
    );
};

export default BookmarkList;
