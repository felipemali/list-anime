import styled from "styled-components";
import { PlayCircleOutlined } from "@ant-design/icons";

export const Slide = styled.div`
  height: 100%;
  width: 85%;
  min-width: 200px;
  min-height: 300px;
  background-repeat: no-repeat;

  background-size: cover;
  width: 205px;
  height: 100px;
  cursor: pointer;

  & :hover ${PlayCircleOutlined} {
    color: red;
    font-size: 100px;
    padding-top: 1em;
  }
`;
