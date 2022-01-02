import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  margin-left: 15rem;
  min-height: 100%;

  .lines {
    position: absolute;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      background-color: var(--border-color);
      z-index: -1;
    }
  }
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
