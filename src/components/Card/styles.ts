import { styled } from "styled-components";

export const CardContainer = styled.div<{ isSelected: boolean }>`
  min-width: 18.75rem;
  height: 26rem;
  position: relative;
  margin-right: 3rem;
  cursor: pointer;
  transition: 0.5s;

  /* &:hover {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: inset 0px -54px 20px 9px black;
    }
  } */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: ${(props) =>
      props.isSelected
        ? " inset 0px -54px 20px 9px black"
        : "inset 0px -90px 176px 0px black"}; //voltar
  }
`;

export const BackPoster = styled.img`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 0) 0%,
    rgba(24, 24, 24, 0.8) 80.79%
  );
`;

export const StarImg = styled.img`
  width: 1.1875rem;
  height: 1.1875rem;
`;

export const ContainerInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
  /* box-shadow: 10px 5px 5px black; */
`;

export const ContainerStar = styled.div`
  display: "flex";
  margin-bottom: 1rem;
`;

export const PostTitle = styled.h2`
  font-family: "Open Sans";
  font-size: 1.5rem;
  font-weight: 600;
  color: #f9f9f9;
`;
