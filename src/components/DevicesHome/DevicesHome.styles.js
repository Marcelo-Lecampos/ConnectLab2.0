import styled from "styled-components";
import {theme} from "@/themes/theme";


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

export const ListButtons = styled.div`
display: flex;
margin-top: 3rem;
button{
  height: 27px;
  background-color: ${theme.orange};
  color: ${theme.white};
  font-size: 1.2rem;
}
`

export const Card = styled.div`
  width: 36.6rem;
  height: 10.4rem;
  border-radius: 1rem;
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.25);
  margin-top: 4rem;

  &:hover {
    transition: 0.2s;
    opacity: 0.8;
  }


  div{
    text-align: center;
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0em;
    color: ${theme.darkBlue};
    text-align: center;
  }
  i{
    font-size: 1rem;
    color: ${theme.darkBlue};
  }

  p{
    font-size: 1.6rem;
    letter-spacing: 0em;
    color: ${theme.gray};
  }

`;

export const ImgHome = styled.img`
    max-width: 8rem;
    max-height: 8rem;
    border-radius: 5rem;
    overflow: hidden;
    display: block;
    border: 0.3rem solid ${theme.white};
    /* outline: #d9dad7 solid 0.2rem; */
    outline: ${({ background }) => {
      if (background === "on") {
        return "#66bb6a" + " solid 0.2rem";
      } else if (background === "off") {
        // return "#d9dad7" + " solid 0.2rem";
        return `${theme.red}` + " solid 0.2rem";
      }
    }};
  `

export const ButtonHome = styled.button`
 width: 4rem;
    height: 4.2rem;
    border-radius: 3rem;
    background-color: ${({ background }) => {
      if (background === "on") {
        return "#66bb6a";
      } else if (background === "off") {
        return "#ff5252";
      }
    }};
    color: ${theme.white};
    font-size: 1rem;
    `;