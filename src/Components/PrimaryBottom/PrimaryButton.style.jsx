import styled from "styled-components";

export const StyledButton = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  display: inline-block;
  border-radius: 3px;
  text-transform: uppercase;

  @media screen and (max-width: 830px) {
    margin-bottom: 3rem;
  }
  cursor: pointer;
  position: relative;
  font-size: inherit;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 3px;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
    background-color: white;
    height: 0.3rem;
    width: 100%;
  }
`;
