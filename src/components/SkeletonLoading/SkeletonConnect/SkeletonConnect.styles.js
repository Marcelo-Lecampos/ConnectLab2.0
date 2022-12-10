import styled from "styled-components";
import { theme } from "@/themes/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100vw;
  padding-bottom: 10rem;
`;

export const Header = styled.section`
 height: 17.2rem;
  width: 60%;
  padding: 2rem;

  @media (max-width: 768px) {
    min-height: 21rem;
  }

  hr {
    width: 100%;
    position: relative;
    border: 1px solid;
    bottom: 2rem;
    opacity: 0.2;
    color: ${theme.gray};
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 500;
  }


`;

export const FormDevices = styled.div`
display: flex;
align-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 90%;
  
  }

  buttom{}

`


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


`
export const Card = styled.div`

    width: 36.6rem;
    height: 22.4rem;
    border-radius: 1rem;
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    box-shadow: rgba(0, 0, 0, 0.25);
    background-color: ${theme.white};
    opacity: 0.4;

    div {
    border-radius: 5rem;
    overflow: hidden;
  }

    h4 {
    font-size: 2rem;
    text-align: center;
  }

  buttom{}
    

`