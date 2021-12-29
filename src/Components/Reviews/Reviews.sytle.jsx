import styled from "styled-components";

export const ReviewStyle = styled.section`
  h4 {
    font-size: 2rem;
    padding: 1rem 0;
  }
  .reviews {
    display: flex;
    position: relative;
    column-gap: 2rem;
    justify-content: space-between;
    background: transparent;
    width: 100%;

    .review {
      background-color: var(--background-dark-grey);
      border: 1px solid var(--border-color);
      border-radius: 3px;
      padding: 0.4rem 1rem;

      h3 {
        padding: 0.3rem;
        color: var(--white-color);
        font-size: 1.3rem;
      }
      p {
        padding: 0.3rem;
      }
    }
  }
`;
