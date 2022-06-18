import styled from "styled-components";

export const ContainerSwiper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2%;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    min-height: 250px;
  }
`;
