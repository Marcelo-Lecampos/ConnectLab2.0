import styled from "styled-components";
import { theme } from "@/themes/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100vw;
  padding-bottom: 10rem;

  p {
    font-size: 1.5rem;
    color: ${theme.orange};
  }
`;

export const Header = styled.section`
  height: 17.2rem;
  width: 60%;
  padding: 2rem;

  @media (max-width: 768px) {
    min-height: 21rem;
  }

  h2 {
    font-size: 3.2rem;
    color: ${theme.orange};
    font-weight: 500;
  }

  hr {
    width: 100%;
    position: relative;
    border: 1px solid;
    bottom: 2rem;
    opacity: 0.2;
    color: ${theme.gray};
  }
`;

export const FormDevices = styled.form`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  label {
    font-size: 1.4rem;
    color: ${theme.darkOrange};
    margin-bottom: 0.5rem;
    margin-left: 0.1rem;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 0.5rem 3rem;
    font-weight: 300;
    font-size: 1.6rem;
    width: 91%;
    ::placeholder {
      color: ${theme.gray};
      font-size: 1.6rem;
    }
    :focus {
      outline: ${theme.orange} solid 2px;
      border-radius: 0.3rem;
    }
    @media (max-width: 1117px) {
      width: 88%;
    }
    @media (max-width: 937px) {
      width: 82%;
    }
  }
`;

export const ProdutosContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  min-width: 60%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 736px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  width: 36.6rem;
  height: 22.4rem;
  border-radius: 1rem;
  background-color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.25);
  i{
    font-size: 1rem;
    color: ${theme.darkBlue};
  }
  &:hover {
    transition: 0.2s;
    opacity: 0.8;
  }

  img {
    max-width: 8rem;
    max-height: 8rem;
    border-radius: 5rem;
    overflow: hidden;
    display: block;
    border: 0.3rem solid ${theme.white};
    outline: ${theme.darkGray} solid 0.2rem;
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0em;
    color: ${theme.darkBlue};
    text-align: center;
  }
`;
