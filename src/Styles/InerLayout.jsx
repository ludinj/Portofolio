import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  z-index: -1;
  @media screen and (max-width: 642px) {
    padding: 4rem;
  }
  @media screen and (max-width: 510px) {
    padding: 3rem;
  }
`;
export const InerLayout = styled.div`
  padding: 5rem 0rem;
  z-index: -1;
`;
