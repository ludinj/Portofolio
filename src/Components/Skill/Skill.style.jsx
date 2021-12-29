import styled from "styled-components";

export const SkillStyle = styled.section`
  position: relative;
  width: 100%;

  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .front-end {
      width: 100%;
      border: 1px solid var(--border-color);
      padding: 1rem 1.5rem;
      background-color: var(--background-dark-grey);
      border-radius: 3px;
    }
    .back-end {
      width: 100%;
      padding: 1rem 1.5rem;
      border: 1px solid var(--border-color);
      padding: 1rem;
      background-color: var(--background-dark-grey);
      border-radius: 3px;
    }
  }
`;
