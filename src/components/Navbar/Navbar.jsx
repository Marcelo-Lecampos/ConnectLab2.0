// import PropTypes from 'prop-types'
import { useCustomTheme } from "@/context/CustomTheme";
import { useAutenticacao } from "@/context/Autenticacao";
import {
  Title,
  Container,
  ContentTitle,
  ImageNav,
  ContentButton,
  ButtonNav,
} from "./Navbar.styles";
import logo from "@assets/Logo.png";
import { useNavigate,useLocation } from "react-router-dom";


import {
  ThemeStyled,
  LoginStyled,
  LogOutStyled,
  HomeStyled,
  ProfileStyled,
  DeviceSsdFillStyled,
  NumberStyled
} from "@components/Icons/Icons.styles";

export const Navbar = (props) => {
  const { logout, autenticado } = useAutenticacao();
  const { handleTheme } = useCustomTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Container>
        <ContentTitle>
          <ImageNav src={logo} alt="logo"></ImageNav>
          <Title>Connect Lab </Title>
        </ContentTitle>

        {!autenticado && (
          <ContentButton>
            <ButtonNav ativo={location.pathname === "/"} onClick={() => navigate("/")}>
              <LoginStyled />
            </ButtonNav>
            <ButtonNav onClick={handleTheme}>
              <ThemeStyled />
            </ButtonNav>
          </ContentButton>
        )}

        {autenticado && (
          <ContentButton>
            <ButtonNav ativo={location.pathname === "/home"} onClick={() => navigate("/home")}>
              <HomeStyled />
            </ButtonNav>
            <ButtonNav ativo={location.pathname === "/perfil" || location.pathname === "/cadastro"} onClick={() => navigate("/perfil")}>
              <ProfileStyled />
            </ButtonNav>
            <ButtonNav ativo={location.pathname === "/devices"} onClick={() => navigate("/devices")}>
              <DeviceSsdFillStyled />
            </ButtonNav>
            <ButtonNav ativo={location.pathname === "/estatisticas"} onClick={() => navigate("/estatisticas")}>
              <NumberStyled />
            </ButtonNav>

            <ButtonNav onClick={handleTheme}>
              <ThemeStyled />
            </ButtonNav>
            <ButtonNav onClick={logout}>
              <LogOutStyled />
            </ButtonNav>
          </ContentButton>
        )}
      </Container>
    </>
  );
};

Navbar.propTypes = {};
