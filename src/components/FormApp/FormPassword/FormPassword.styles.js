import styled from "styled-components";
import {theme} from "@/themes/theme";

export const FormInputStyled = styled.input`
  width: 33.8rem;
  height: 3.4rem;
  border-radius: 0.3rem;
  color: ${theme.gray};
  opacity: 0.8;
  font-size: 1.2rem;
  padding-left: 2.7rem;
  &:focus {
    outline: 2px solid ${theme.yellowOrange};
  };

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${theme.gray};
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;

// criar um button para o toggle
export const TogglePasswordButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: translate(-3.5rem, 1rem);
  position: absolute;
`;