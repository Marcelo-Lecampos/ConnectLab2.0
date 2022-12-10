import Modal from "styled-react-modal";
import styled from "styled-components";
import {theme} from "@/themes/theme";

export const StyledModal = Modal.styled`
  width: 40rem;
  height: 29rem;
  border-radius: 2rem;
  padding: 2rem;
  background-color: ${theme.lightGray};
  transition : all 0.3s ease-in-out; 
  font-size: 1.5rem;


  `;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;
  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${theme.orange};
    text-align: center;
  }
  label {
    font-size: 1.4rem;
    color: ${theme.darkOrange};
    margin-bottom: 0.5rem;
    margin-left: 0.1rem;
  }

  select {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 1rem 0.5rem;
    font-weight: 300;
    font-size: 1.6rem;
    width: 95%;
    margin-bottom: 1rem;
    ::placeholder {
      color: ${theme.gray};
      font-size: 1.6rem;
    }
    :focus {
      outline: ${theme.orange} solid 2px;
      border-radius: 0.3rem;
    }
  }

  option{
    font-size: 1rem;
    color: ${theme.gray};
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 0.5rem 0.5rem;
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 1.6rem;
    width: 95%;
    ::placeholder {
      color: ${theme.gray};
      font-size: 1.6rem;
    }
    :focus {
      outline: ${theme.orange} solid 2px;
      border-radius: 0.3rem;
    }
  }

  div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    
  }
`;
