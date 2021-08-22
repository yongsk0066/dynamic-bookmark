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
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 2px;
    padding: 8px;
    margin-bottom: 8px;
`;

export const Button = styled.button`
    margin-bottom: 8px;
    border: none;
    padding: 8px;
    background-color: #4285f4;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 2px;
    cursor: pointer;
`;
