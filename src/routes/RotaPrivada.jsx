import { useAutenticacao } from "@context/Autenticacao";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const RotaPrivada = ({ children }) => {
  const { autenticado, loading } = useAutenticacao();

  if (loading) {
    return console.log('...carregando');
  }

  return !autenticado ? <Navigate to="/" /> : children;
};

RotaPrivada.propTypes = {
  children: PropTypes.node,
};
