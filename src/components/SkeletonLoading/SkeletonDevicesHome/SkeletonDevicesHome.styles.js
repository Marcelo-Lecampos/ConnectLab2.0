import styled from "styled-components";
import { theme } from "@/themes/theme";

export const Container = styled.div`
  width: 36.6rem;
  height: 10.4rem;
  border-radius: 1rem;
  background-color: ${theme.white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.25);
  margin-top: 4rem;
  opacity: 0.5;
`;

export const TextDiv = styled.div`
  text-align: center;
  width: 9rem;
  height: 90%;
  margin-top: 1rem ;
  font-size: 3rem;


  
`;
export const ImgCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgMiniCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;


export const ListButtons = styled.div`
display: flex;
margin-top: 3rem;
opacity: 0.5;

`

// para centralizar elementos no css: uma opção é o código seguinte:
