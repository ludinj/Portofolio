import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  background-color: var(--sidebar-dark-color);
  width: 15rem;
  height: 100vh;
  overflow: hidden;

  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    width: 11rem;
  }
`;
