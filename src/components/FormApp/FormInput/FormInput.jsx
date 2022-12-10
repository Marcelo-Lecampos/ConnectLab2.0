// import PropTypes from "prop-types";
import { FormInputStyled } from "./FormInput.styles";
import { forwardRef } from "react";


export const FormInput = forwardRef((props, ref ) => {
  return (
    <FormInputStyled
      type="text"
      ref={ref}
      {...props}
    />
  );
});

FormInput.displayName = "FormInput";

FormInput.propTypes = {

};
