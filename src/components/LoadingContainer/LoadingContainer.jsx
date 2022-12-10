import CircleLoader from "react-spinners/CircleLoader ";
import { Mensagem, LoadingDiv } from "./LoadingContainer.styles";
import PropTypes from "prop-types";
import { theme } from "@/themes/theme";

export const LoadingContainer = ({msg="carregando"}) => {
  return (
    <LoadingDiv>
      <div>
        <CircleLoader color={theme.orange} size={150} />)
        <Mensagem>{msg}</Mensagem>
      </div>
    </LoadingDiv>
  );
};

LoadingContainer.propTypes = {
  msg: PropTypes.string,
};
