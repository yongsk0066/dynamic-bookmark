import styled, { keyframes } from "styled-components";

const tikcer = keyframes`{
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}`;

export const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;
export const Container = styled.div`
    display: flex;
    padding: 8px;
    width: fit-content;
    padding-left: 100%;
    box-sizing: content-box;

    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 5s;
    animation-name: ${tikcer};
`;
export const Ticker = styled.div`
    display: inline-block;
    white-space: nowrap;
    /* padding-right: %; */
    box-sizing: content-box;
`;

export const Item = styled.div`
    font-weight: bold;
    color: white;
    display: inline-block;
    :hover {
        cursor: pointer;
    }

    /* span {
        color: #07eb07;
        font-size: 1.25rem;
        font-weight: bold;
    }
    b {
        color: #ff1616;
        font-size: 1.25rem;
        font-weight: bold;
    }
    i {
        color: #00000000;
    } */
`;
