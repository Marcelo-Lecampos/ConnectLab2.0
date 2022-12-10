import styled from "styled-components";
import {theme} from "@/themes/theme";


export const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.darkWhite};
  height: 69rem;
  width: 84rem;
  border-radius: 1rem;
  padding: 4.4rem 4.8rem;
  box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.1);
  margin-top: 1rem;

  @media (max-width: 768px) {
    height: 80%;
  }
`;

export const Titulo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.orange};
  margin: 2rem 0 4.8rem 0;
`;

export const FormContainerStyled = styled.form`
  width: 100%;
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-gap: 1rem;
  }
`;

export const InputContainer = styled.div`
  padding: 2rem 0 0 0;
`;

export const ButtonContainer = styled.div`
  /* padding: 1rem 0 0 0; */
  display: flex;
  flex-direction: column;
  align-items: center;

`;
