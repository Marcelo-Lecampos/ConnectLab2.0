import styled from "styled-components";
import {theme} from "@/themes/theme";

export const LoadingDiv =  styled.div`
background-color: ${theme.white};
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.5;
z-index: 200;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

`

export const Mensagem = styled.i`
color: ${theme.orange};
font-size: 2.4rem;   
margin-top: 3rem;
text-align: center;

`