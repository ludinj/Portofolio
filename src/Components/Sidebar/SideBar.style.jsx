import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  background-color: var(--sidebar-dark-color);
  width: 16.1rem;
  height: 100vh;

  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;
