import React from "react";
import { Bookmark } from "../../types/bookmark.types";
import { Container, Item, Ticker, Wrapper } from "./Selected.styles";

const Selected = ({ content }: { content: Bookmark | undefined }) => {
    const handleCreateTab = (url?: string) => {
        chrome.tabs.create({ url: url });
    };
    return (
        <Wrapper>
            <Container>
                <Ticker>
                    <Item onClick={() => handleCreateTab(content?.url)}>
                        {content?.title || "⬇️ 대상을 검색해, 선택해주세요 ⬇️"}
                    </Item>
                </Ticker>
            </Container>
        </Wrapper>
    );
};

export default Selected;
