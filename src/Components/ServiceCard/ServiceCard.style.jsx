import styled from "styled-components";

export const ServiceWrapper = styled.div`
  text-align: left;
  background-color: var(--background-dark-grey);
  border-bottom: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  border-radius: 3px;

  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(-3px);
  }
  .container {
    padding: 1.2rem;
    h4 {
      color: var(--white-color);
      font-size: 1.4rem;
      padding: 1rem 0;
      position: relative;

      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      padding: 0.8rem 0;
    }
  }
`;
