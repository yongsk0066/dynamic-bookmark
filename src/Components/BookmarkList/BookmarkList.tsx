import React from "react";
import { Bookmark } from "../../types/bookmark.types";
import { Ul, Li } from "./BookmarkList.styles";

const dummyData: Bookmark[] = [
    {
        dateAdded: 1626246112763,
        id: "30",
        index: 6,
        parentId: "1",
        title: "2021. 7. 12 ~ 2021. 7. 16 - SERVER/WEB - DRAMA&COMPANY",
        url: "http://wiki.dramancompany.com/display/API/2021.+7.+12+~+2021.+7.+16",
    },

    {
        dateAdded: 1626761476157,
        id: "33",
        index: 7,
        parentId: "1",
        title: "테크 스펙",
        url: "http://wiki.dramancompany.com/pages/viewpage.action?pageId=325451847",
    },
    {
        dateAdded: 1624329043333,
        id: "7",
        index: 1,
        parentId: "41",
        title: "WIKI",
        url: "http://wiki.dramancompany.com/pages/viewpage.action?pageId=19695459",
    },
    {
        dateAdded: 1628833234348,
        id: "55",
        index: 16,
        parentId: "1",
        title: "웹 -> 앱 인터페이스 목록 - Client - DRAMA&COMPANY",
        url: "http://wiki.dramancompany.com/pages/viewpage.action?pageId=338100323",
    },
];

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