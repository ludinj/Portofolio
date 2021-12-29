import styled from "styled-components";

export const ProgresBarStyle = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  h6 {
    padding: 0.5rem 0;
    color: var(--white-color);
    font-weight: 600;
    text-transform: uppercase;
  }
  .progres-bar {
    align-items: center;
    display: flex;
    position: relative;
    left: 0;
    p {
      padding-right: 1.2rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);

      span {
        background-color: var(--primary-color);
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
      }
    }
  }

  span {
    background-color: red;
    width: 100%;
  }
`;
