import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  p {
    font-family: "Open Sans";
    font-size: 1, 5rem;
    font-weight: 600;
    color: #f9f9f9;
  }
`;
