import styled from "styled-components";
import {theme} from "@/themes/theme";



export const ButtonDevice = styled.button`
  background-color: ${({background}) => background};
  color: ${theme.white};
  margin-top: 1.4rem;
  margin-left: 1rem;
  font-size: 1.4rem;
  padding: 0 2rem;
  height: 4.2rem;
  text-transform: uppercase;
  border: medium none;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 80ms ease-in-out;

  @media (max-width: 768px) {
    width: 12rem;
  }

  &:hover {
    outline: ${theme.orange} solid 2px;
    border-radius: 0.3rem;

  }
`;