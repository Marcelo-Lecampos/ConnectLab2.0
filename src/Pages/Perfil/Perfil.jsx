// import PropTypes from 'prop-types'
import {
  PerfilContainer,
  DadosContainer,
  EnderecoContainer,
  ButtonContainer,
} from "./Perfil.styles";
import { LinkStyled } from "@components/LinkStyled";
import usuario from "@assets/usuario.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAutenticacao } from "@context/Autenticacao";
import { EditAltStyled } from "@components/Icons/Icons.styles";
import { Helmet } from "react-helmet";

export const Perfil = (props) => {
  const { user } = useAutenticacao();
  const { fullName, phone, email, userAddress, photoUrl } = user;
  const { street, neighborhood, city, state, zipCode, number } = userAddress;
  const navigate = useNavigate();
  return (
    <PerfilContainer>
      <Helmet>
        <title>Connect Lab || Perfil ✨</title>
        <meta name="description" content="Página do Perfil" />
      </Helmet>
      <h1>Meu Perfil</h1>

      <DadosContainer>
        <img src={photoUrl || usuario} alt="foto do usuário" />
        <div>
          <h2>{fullName}</h2>
          <span>
            {email} - {phone}
          </span>
        </div>
      </DadosContainer>

      <EnderecoContainer>
        <h2>Endereço</h2>
        <hr />
        <p>{zipCode}</p>
        <span>
          {street} - {number}- {neighborhood} - {city} - {state}{" "}
        </span>
      </EnderecoContainer>

      <ButtonContainer>
        <button onClick={() => navigate("/cadastro")}>
          <EditAltStyled />
          Editar
        </button>
        <LinkStyled>
          <Link to="/home">Sair</Link>{" "}
        </LinkStyled>
      </ButtonContainer>
    </PerfilContainer>
  );
};

Perfil.propTypes = {};
