import styled from "styled-components";
// import {theme} from "@/themes/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 35vw;
  padding-bottom: 10rem;

  @media (max-width: 1090px) {
    padding-bottom: 51rem;
    width: 66vw;
  }
  @media (max-width: 900) {
    padding-bottom: 38rem;
    width: 98vw;
  }
`;
