import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding: 8px;
    gap: 8px;
`;

export const Li = styled.li`
    list-style: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
    :hover {
        cursor: pointer;
    }
`;
