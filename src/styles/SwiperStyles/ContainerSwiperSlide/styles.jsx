import styled from "styled-components";

export const ContainerSwiperSlide = styled.div`
  border: 10px solid #343a40;
  background: #3f7986;
  border-radius: 10px 10px;
  height: 445px;
  width: 225px;
  transition: all 0.4s;
  animation-timing-function: ease;

  @media (max-width: 425px) {
    width: 220px;
    height: 415px;
  }
`;
