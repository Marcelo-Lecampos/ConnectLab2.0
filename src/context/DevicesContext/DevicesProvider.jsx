import propTypes from "prop-types";
import { DevicesContext } from "./DevicesContext";
import { APIProdutos, APIAddDevice, APIUserDevices, APIUpdateDevice, APIDeleteDevices } from "@services/useApi";
import { useState } from "react";
import { useAutenticacao } from "@context/Autenticacao";
import { useNavigate } from "react-router-dom";
export const DevicesProvider = ({ children }) => {
  const [produtos, setProdutos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [atualiza, setAtualiza] = useState(false);
  const [listDevices, setListDevices] = useState(null);
  const [notFound, setNotFound] = useState(true);
  const [data , setData] = useState(null);
  const { aviso } = useAutenticacao();
  const navigate = useNavigate();

  const getDevices = async () => {
    try {
      setLoading(true);
      const response = await APIProdutos();
      setProdutos(response.data);
    } catch (error) {
      aviso("❌ Parece que houve um erro: ", error);
    } finally {
      setLoading(false);
    }
  };

  const addDevices = async (dados) => {
    try {
      aviso("⚙ Salvando os dados...");
      setAtualiza(true);
      const response = await APIAddDevice(dados);
      aviso("✔ Adicionado com sucesso");
      navigate("/home");
      userDevices();
      return response;
    } catch (error) {
      aviso("❌ Parece que houve um erro: ", error);
    } finally {
      setAtualiza(false);
    }
  };

  const userDevices = async () => {
    try {
      setLoading(true);
      const response = await APIUserDevices();
      return setListDevices(response.data);
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  };

  const updateDevices = async (item) => {
    try {
      setLoading(true);
      const response = await APIUpdateDevice(item);
      aviso("✔ Atualizado com sucesso");
      aviso("✔ Aguarde um instante...");
      userDevices();
      return response;
    } catch (error) {
      aviso("❌ Parece que houve um erro: ", error);
    } finally {
      // setLoading(false);
    }
  };

  const deleteDevices = async (item) => {
    try {
      setLoading(true);
      await APIDeleteDevices(item);
      aviso("✔ Deletado com sucesso");
      aviso("✔ Aguarde um instante...");
      userDevices();
    } catch (error) {
      
      aviso("❌ Parece que houve um erro: ", error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <DevicesContext.Provider
      value={{
        getDevices,
        produtos,
        setProdutos,
        loading,
        setLoading,
        addDevices,
        userDevices,
        listDevices,
        setListDevices,
        notFound,
        setNotFound,
        updateDevices,
        deleteDevices,
        data,
        setData,
        atualiza,
        setAtualiza,
        
      }}
    >
      {children}
    </DevicesContext.Provider>
  );
};

DevicesProvider.propTypes = {
  children: propTypes.node,
};
