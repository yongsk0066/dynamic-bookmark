import React from "react";
import { Container, Input } from "./SearchBar.styles";

const SearchBar = ({ currentBookmark }: { currentBookmark: any }) => {
    return (
        <Container>
            <Input placeholder="변경할 북마크 검색" {...currentBookmark} />
        </Container>
    );
};

export default SearchBar;
