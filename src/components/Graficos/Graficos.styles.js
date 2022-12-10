import styled from "styled-components";
import { theme } from "@/themes/theme";



export const Container = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Name = styled.h1`
  font-size: 2rem;
  color: ${theme.orange};
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 950px) {
      font-size: 1.5rem;
    }
    @media (max-width: 550px) {
      font-size: 1rem;
    }
`;

export const Legenda = styled.h2`
  font-size: 1.5rem;
  color: ${({ color }) => color};
  text-align: center;
  @media (max-width: 950px) {
      font-size: 1rem;
    }
    @media (max-width: 550px) {
      font-size: 1rem;
    }

`;

export const Border = styled.div`
  border: 1px solid ${theme.white};
  width: 25%;
    margin: 1rem auto 0;
    padding: 1rem;
    border-radius: 1rem;

    @media (max-width: 950px) {
      width: 50%;
    }
    @media (max-width: 550px) {
      width: 50%;
    }

`;

export const CarrosselDiv = styled.div`
  width: 95%;
  height: 100%;
  background-color: ${theme.gray};
  font-size: 5rem;  
  color : white;
  margin-top: 1rem;




`
