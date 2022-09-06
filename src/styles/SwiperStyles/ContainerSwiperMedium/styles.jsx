import styled from "styled-components";

export const ContainerSwiperMedium = styled.div`
  width: 80%;
  height: 40%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 2%;
  /* border: 1px solid red; */
  @media (max-width: 1024px) {
    width: 90%;
  }
`;