// import PropTypes from "prop-types";
import { FormInputStyled, TogglePasswordButton } from "./FormPassword.styles";
import { forwardRef, useState } from "react";
import { EyeFillStyled, EyeSlashFillStyled } from "@components/Icons/Icons.styles";


export const FormPassword = forwardRef((props, ref) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <FormInputStyled
        type={passwordShown ? "text" : "password"}
        ref={ref}
        {...props}
      />
      <TogglePasswordButton onClick={togglePassword} type="button">
        {passwordShown ? <EyeSlashFillStyled /> : <EyeFillStyled />}
      </TogglePasswordButton>
    </>
  );
});

FormPassword.displayName = "FormInput";

FormPassword.propTypes = {};
