import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 90%;
    border-bottom: 1px solid var(--border-color);
    padding: 1.1rem 0;
    justify-content: center;
    display: flex;
    img {
      width: 65%;
      height: 10rem;
      border-radius: 50%;
      border: 7px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;

    li {
      display: block;

      position: relative;
      padding: 0.1rem;
      width: 100%;
      .active {
        background-color: var(--primary-color-light);
      }
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        font-size: 1.2rem;
        font-weight: 600;
      }

      &:hover {
        cursor: pointer;
      }

      &::before {
        content: "";
        position: absolute;
        width: 0;
        left: 0;
        bottom: 0;
        height: 50%;
        background-color: var(--primary-color-light);
        opacity: 0.21;
        transition: all 0.4s cubic-bezier(0.59, -0.16, 0.07, 1.12);
      }
      &:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    border-top: 1px solid var(--border-color);
    width: 90%;

    p {
      padding: 1rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;
