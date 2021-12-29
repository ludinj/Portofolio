import React from "react";
import styled from "styled-components";
function ButtonSm({ filter, button }) {
  return (
    <ButtonsStyed>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyed>
  );
}

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.5rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.4s ease-in;
  border-radius: 3px;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover {
    background-color: var(--primary-color);
  }
`;
export const ButtonsStyed = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
export default ButtonSm;
