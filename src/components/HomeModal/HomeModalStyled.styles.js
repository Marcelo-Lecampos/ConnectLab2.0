import Modal from "styled-react-modal";
import styled from "styled-components";
import {theme} from "@/themes/theme";

export const StyledModal = Modal.styled`
  width: 31rem;
  height: 53rem;
  border-radius: 2rem;
  padding: 2rem;
  background-color: #D7DBDD;
  transition : all 0.3s ease-in-out; 
  font-size: 1.5rem;
  `;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  h4 {
    font-weight: 700;
    font-size: 2.4rem;
    color: #ff8818;
    text-align: center;
  }
  p {
    font-size: 1.4rem;
    color: #5d6d7e;
    text-align: center;

  }


  div {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }

  h3 {
    font-size: 1.6rem;
    color: #2e4052;
    
  }

  hr {
    width: 100%;
    border: 1px solid;
    margin: 1em 0px;
    opacity: 0.1;
    color: #5d6d7e;
  }

  ul{
    list-style: none;
    padding-bottom: 3rem;
  }

  li{
    font-size: 1.4rem;
    color: #5d6d7e;
  }

  strong{
    font-weight: bold;
    color: #2e4052;

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
        return `${theme.darkGray}` + " solid 0.2rem";
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