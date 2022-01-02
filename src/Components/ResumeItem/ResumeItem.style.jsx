import styled from "styled-components";

export const ResumeItemStyle = styled.div`
  display: flex;
  background-color: var(--background-dark-color);
  padding-bottom: 2rem;

  .left-content {
    width: 30%;
    padding-left: 0.5rem;
    p {
      padding-top: 0.3rem;
    }
  }
  .rigth-content {
    padding-left: 4rem;
    position: relative;
    padding-right: 1rem;
    width: 100%;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 4px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      font-size: 2rem;
      color: var(--primary-color);
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      color: var(--white-color);
      font-size: 1.2rem;
    }

    @media screen and (max-width: 595px) {
      h5 {
        font-size: 1.7rem;
      }
    }
    @media screen and (max-width: 460px) {
      p,
      h6 {
        font-size: 0.7rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 400px) {
      p,
      h6 {
        font-size: 0.5rem;
      }
      h5 {
        font-size: 0.8rem;
      }
    }
  }
`;
