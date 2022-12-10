import styled from "styled-components";
import {theme} from "@/themes/theme";

export const NotFound = styled.button`
  font-size: 2rem;
  color: ${theme.white};
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};;
  margin-top: 8rem;
  padding: 2rem;
  cursor: pointer;
`;