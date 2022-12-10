import { ButtonDevice } from "./ButtonStyle.styles";
import PropTypes from "prop-types";

export const ButtonStyle = ({ children, onClick, disabled, background="#FF8818"}) => {
  return (
    <ButtonDevice background={background} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonDevice>
  );
};

ButtonStyle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  background: PropTypes.string,
};
