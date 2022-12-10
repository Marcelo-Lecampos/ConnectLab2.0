import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { AutenticacaoContext } from "./AutenticacaoContext";
import { useNavigate } from "react-router-dom";
import { APILogin, APIEdicao,APICadastro } from "@services/useApi";
import Snackbar from "awesome-snackbar";


export const AutenticacaoProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [desabilitado, setdesabilitado] = useState(false);
  
  const cadastro = async(data) => {
    try{
      aviso("Iniciando o cadastramento, este processo pode demorar alguns minutos...");
      setdesabilitado(true);
      await APICadastro(data);
      aviso("Cadastrado com sucesso!");
      navigate("/");
    }
    catch(error){
      aviso(error);
    }
    finally{
      setdesabilitado(false);
    }
  }

  const edicao = async (dados) => {
    try {
      setdesabilitado(true);
      const response = await APIEdicao(dados);
      localStorage.setItem("usuario", JSON.stringify(response.data));
      aviso("✔ Edição efetuada com sucesso!");
      setUser(response.data);
      navigate("/perfil");
    } catch (err) {
      aviso("❌ Erro ao editar");
    }
    finally{
      setdesabilitado(false);
    }
  };

  const login = async (dados) => {
    setdesabilitado(true);
    aviso("⚙ verificando os dados...");
    try {
      const response = await APILogin(dados);
      aviso("✔ Login efetuado com sucesso!");
      localStorage.setItem("usuario", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.user._id);
      const usuario = localStorage.getItem("usuario");
      const parse = JSON.parse(usuario);
      setUser(parse);
      navigate("/home");
    } catch (err) {
      aviso("❌ Login ou password errados");
      setdesabilitado(false);
    }
    finally{
      setdesabilitado(false);
    }
  };

  const autoLogin = useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    const token = localStorage.getItem("token");

    if (usuario && token) {
      const parse = JSON.parse(usuario);
      setUser(parse);

      navigate("/home");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const aviso = (msg) => {
    new Snackbar(msg, { // eslint-disable-line no-new
     

      timeOut: 1000,
      position: "bottom-right",
      style: {
        container: [["background-color", "#FF8818"]],
        message: [["font-size", "1rem"]],
      },
    });
  };

  const logout = () => {
    aviso("✔ Logout realizado com sucesso");
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    setdesabilitado(false);
  };

 




  return (
    <AutenticacaoContext.Provider
      value={{
        cadastro,
        autenticado: !!user,
        user,
        login,
        logout,
        autoLogin,
        desabilitado,
        setdesabilitado,
        aviso,
        edicao,
      }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
};

AutenticacaoProvider.propTypes = {
  children: PropTypes.node,
};
