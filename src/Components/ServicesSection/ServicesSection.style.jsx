import styled from "styled-components";

export const ServiceSectionStyle = styled.section`
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
    grid-gap: 2rem;

    @media screen and (max-width: 950px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
      .mid-section {
        margin: 0;
      }
    }

    @media screen and (max-width: 650px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.5rem;
      .mid-section {
        margin: 0;
      }
    }
  }
`;
