import styled from "styled-components";
import {theme} from "@/themes/theme";



export const TempoContainer = styled.div`
  font-size: 2rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  height: 28.5rem;
  width: 80%;
  /* background-color: ${theme.white}; */
  background: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 960px) {
    padding: 8rem;
    height: 52.2rem;
    width: 50%;
  }

  h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${theme.orange};
    margin-bottom: 1rem;
  }

  span {
    font-size: 2rem;
    letter-spacing: 0em;
    color: ${theme.white};
    text-align: center;
    padding: 1.5rem 1rem;

  }

  div{
    display: flex;
    /* padding-right: 5rem; */
    align-items: center;
    
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    @media (max-width: 960px) {
      flex-direction: column;
    }
  }

  li {
    margin: 0 1rem;
    font-size: 1.4rem;
    color: ${theme.white};
    @media (max-width: 960px) {
      margin: 1rem 0;
    }
  }
`;