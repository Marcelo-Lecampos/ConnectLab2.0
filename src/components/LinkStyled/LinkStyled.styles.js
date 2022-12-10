import styled from "styled-components";
import {theme} from "@/themes/theme";

export const LinkStyles = styled.p`
  color: ${theme.black};
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.5rem;
  text-decoration: underline;
  list-style: none;
  cursor: pointer;
  &:hover {
    color: ${theme.black};
    opacity: 0.8;
  }
`;
