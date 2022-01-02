import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100vh;
  position: absolute;

  .particulas {
    position: relative;
    top: 0;
    left: 0;
    max-height: 100vh;
    overflow-y: hidden;
  }

  .typography {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1 {
      color: var(--white-color);

      font-size: 3.2rem;
      span {
        font-size: 3.2rem;
        color: var(--primary-color);
      }
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        justify-content: center;
        align-items: center;
        display: flex;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 1rem;
        }
      }

      .youtube {
        &:hover {
          border: 2px solid blue;
          color: white;
        }
      }
      .facebook {
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
      }

      .github {
        &:hover {
          border: 2px solid white;
          color: white;
        }
      }
    }
  }
`;
