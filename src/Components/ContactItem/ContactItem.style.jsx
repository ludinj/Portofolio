import styled from "styled-components";

export const ContactWrapper = styled.div`
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem;
  position: relative;
  @media screen and (max-width: 510px) {
    width: 80%;
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2rem;
    }
  }

  .rigth-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.4rem;
    }

    p {
      padding: 0.1rem 0.1rem;
      position: relative;
    }
  }
`;
