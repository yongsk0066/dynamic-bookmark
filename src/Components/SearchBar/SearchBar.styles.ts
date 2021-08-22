import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
`;

export const Input = styled.input`
    height: 20px;
    width: 100%;
    border: 1px solid #d6d6d7;
    /* border: none; */

    padding: 9px 11px;
    font-size: 1rem;
    color: white;
    background-color: #202124;
    :focus {
        /* outline: none; */
        outline: 2px solid #0073d0;
        border: 1px solid #00000000;
    }
`;
