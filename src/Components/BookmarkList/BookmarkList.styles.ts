import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 2px;
`;

export const Li = styled.li`
    list-style: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
    padding: 8px;
    :hover {
        cursor: pointer;
        background-color: #222222;
    }
`;

export const RegResult = styled.div`
    color: white;
`;
