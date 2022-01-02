import styled from "styled-components";

export const TitleStyle = styled.div`
  position: relative;
  text-align: left;
  transition: all ease-in-out;

  opacity: 1;
  h2 {
    color: var(--white-color);
    font-weight: 600;
    font-size: 3.1rem;
    position: relative;
    text-transform: uppercase;
    padding: 0.7rem 0;
    animation: textanimation 0.6s ease-in-out;

    @media screen and (max-width: 750px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
    @keyframes textanimation {
      0% {
        opacity: 0;
        margin-left: -50px;
      }

      100% {
        opacity: 1;
        margin-left: 0;
      }
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: 0.3rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 4rem;
      height: 0.3rem;
      background-color: var(--primary-color-light);
      border-radius: 15px;
      left: 0;
    }
    span {
      font-weight: 900;
      color: rgba(25, 29, 43, 0.44);
      position: absolute;
      left: 0;
      top: 30%;
      font-size: 4rem;
      z-index: -1;

      @media screen and (max-width: 750px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 2rem;
      }
    }
  }
`;
