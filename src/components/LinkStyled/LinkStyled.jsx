import PropTypes from "prop-types";
import { LinkStyles } from "./LinkStyled.styles";

export const LinkStyled = ({ children }) => {
  return <LinkStyles>{children}</LinkStyles>;
};

LinkStyled.propTypes = {
  children: PropTypes.node.isRequired,
};
