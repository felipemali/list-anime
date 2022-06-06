import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ background }) => css`
    background-color: ${background};
    animation-name: slidee;
    transform: translateY(-100px);
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    /* background: linear-gradient(360deg, #000000 0, rgba(32, 32, 34, 0) 99%); */
    color: #fff;
    padding-top: 1%;
    padding-bottom: 5%;
  `}
`;
