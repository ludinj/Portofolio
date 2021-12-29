import styled from "styled-components";

export const ResumeItemStyle = styled.div`
  display: flex;

  padding-bottom: 2rem;

  .left-content {
    width: 50%;
    padding-left: 0.5rem;
    p {
      padding-top: 0.3rem;
    }
  }
  .rigth-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
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
  }
`;
