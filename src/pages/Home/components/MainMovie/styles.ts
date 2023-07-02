import { styled } from "styled-components";

export const ContainerMain = styled.main`
  height: 70vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: inset 54px -168px 176px 0px black; //voltar
  }
`;

export const ContainerStar = styled.div`
  display: "flex";
  /* margin-bottom: 1rem; */
`;

export const StarImg = styled.img`
  /* width: 1.1875rem;
  height: 1.1875rem; */
`;

export const ImgBanner = styled.img`
  z-index: 5;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

export const Title = styled.h1`
  font-family: "Open Sans";
  font-size: 3.5rem;
  font-weight: 600;
  color: #f9f9f9;
  margin-bottom: 1.625rem;
  text-wrap: nowrap;
`;

export const DescriptionText = styled.p`
  font-family: "Open Sans";
  font-size: 1.25rem;
  font-weight: 400;
  color: #f9f9f9;
  margin-bottom: 2.5rem;
  line-height: 1.75rem;
  min-height: 7rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Button = styled.button`
  padding: 0.75rem 4rem;
  border-radius: 0.25rem;
  font-family: "Open Sans";
  font-size: 1.5rem;
  font-weight: 600;
  color: #181818;
  background-color: #ffa634;
  border: none;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 27%;
  max-width: 33.5rem;
  margin-left: 3rem;
`;

export const VideoContainer = styled.div`
  position: relative;
  top: -9rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: inset 54px -168px 176px 0px black; //voltar
  }
`;
