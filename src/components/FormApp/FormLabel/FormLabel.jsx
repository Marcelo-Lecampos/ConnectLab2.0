import PropTypes from 'prop-types'
import {FormLabelStyled} from './FormLabel.styles'

export const FormLabel = ({children}) => {
  return (
    <FormLabelStyled>{children}</FormLabelStyled>
  )
}

FormLabel.propTypes = {
  children: PropTypes.node.isRequired
}

