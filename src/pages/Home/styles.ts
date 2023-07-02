import { styled } from "styled-components";

export const Content = styled.div`
  padding: 2.5rem 3rem;
  min-height: 100vh;
  background-color: #121214;
`;

export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;

  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #3a3939; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #242424; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: none; /* creates padding around scroll thumb */

    cursor: pointer;
  }
`;

export const FavoriteContainer = styled.section`
  z-index: 1;
  width: calc(100vw - 4.05rem);
  margin-top: 48vh;
  margin-bottom: 5.5625rem;
`;

export const SubTitle = styled.h2`
  position: relative;
  z-index: 1;
  font-family: "Open Sans";
  font-size: 2rem;
  font-weight: 600;
  color: #f9f9f9;
`;

export const Line = styled.div`
  position: relative;
  z-index: 1;
  width: 4rem;
  height: 0.3rem;
  background-color: #ffa634;
  color: transparent;
  margin-top: 0.5rem;
  margin-bottom: 2.625rem;
`;
