import React from "react";
import { StyledButton } from "./PrimaryButton.style";

const PrimaryButton = ({ title }) => {
  return (
    <StyledButton>
      <a
        href="https://drive.google.com/file/d/13syfEJa0uUjXuGDzkLZZOwb5FKlfbDxS/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </StyledButton>
  );
};

export default PrimaryButton;
