import styled from "styled-components";
import { theme } from "@/themes/theme";

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 52.9rem;
  width: 38.1rem;
  background-color: ${theme.white};
  color: ${theme.black};
  padding: 0 20px;
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  @media (max-width: 960px) {
    height: 45.9rem;
    width: 32.1rem;
    margin-top: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${theme.orange};
    margin: 4rem 0;
  }
`;

export const DadosContainer = styled.div`
  display: flex;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-right: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.5rem;
    color: black;
  }

  span {
    font-size: 1.2rem;
    color: ${theme.gray};
    line-height: 0.5rem;
  }
`;

export const EnderecoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h2 {
    font-size: 1.5rem;
    color: black;
  }

  span {
    font-size: 1.2rem;
    color: ${theme.gray};
    line-height: 0.5rem;
  }

  p {
    font-size: 1.4rem;
    color: ${theme.gray};
  }

  hr {
    width: 100%;
    color: ${theme.gray};
    opacity: 0.5;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;

  button {
    height: 4.5rem;
    width: 9.6rem;
    border-radius: 4rem;
    padding: 0 2.4rem;
    color: ${theme.white};
    background-color: ${theme.orange};
    font-size: 1.4rem;
  }
`;
