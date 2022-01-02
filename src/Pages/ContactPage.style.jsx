import styled from "styled-components";

export const ContactWrapper = styled.section`
  position: relative;
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 830px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 2rem;
    }
    .rigth-section {
      display: flex;

      flex-direction: column;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        font-size: 2rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 510px) {
        width: 80%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;

        label {
          left: 10px;
          position: absolute;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          width: 12rem;
          text-align: left;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background-color: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }

        textarea {
          background: transparent;
          width: 100%;

          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          padding: 0.8rem 0.5rem;
          resize: none;
        }
      }
    }
  }
`;
