import PropTypes from "prop-types";
import {Title} from "./FormTitle.Styles";

export const FormTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

FormTitle.propTypes = {
  children: PropTypes.node,
};
