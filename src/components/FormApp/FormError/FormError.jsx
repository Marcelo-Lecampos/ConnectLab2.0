import PropTypes from 'prop-types'
import { FormErrorStyled } from './FormError.styles'
import { ErrorStyled } from "@components/Icons/Icons.styles";

export const FormError = ({children}) => {
    return (
      <FormErrorStyled><ErrorStyled/> {children}</FormErrorStyled>
    )
  }
  
  FormError.propTypes = {
    children: PropTypes.node
  }
  