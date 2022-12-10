import { useDevices } from "@context/DevicesContext";
// import propTypes from "prop-types";
import { CarrosselDiv } from "./Graficos.styles";
import { BarGraphType } from "./BarGraphType";
import { Pie } from "./Pie";
import { BarGraphSwitch } from "./BarGraphSwitch";
import Carousel from "nuka-carousel";


export const Graficos = () => {
  const { listDevices } = useDevices();

  let itsOnArray = [];
  let itsOffArray = [];
  let casaArray = [];
  let escritorioArray = [];
  let fabricaArray = [];
  let casaIsON = [];
  let escritorioIsON = [];
  let fabricaIsON = [];
  let casaIsOFF = [];
  let escritorioIsOFF = [];
  let fabricaIsOFF = [];
  let casaEnergia = [];
  let casaSegurança = [];
  let casaComunicacao = [];
  let casaAcesso = [];
  let escritorioEnergia = [];
  let escritorioSegurança = [];
  let escritorioComunicacao = [];
  let escritorioAcesso = [];
  let fabricaEnergia = [];
  let fabricaSegurança = [];
  let fabricaComunicacao = [];
  let fabricaAcesso = [];
  let todosEnergia = [];
  let todosSegurança = [];
  let todosComunicacao = [];
  let todosAcesso = [];

  if (listDevices) {
    // 🔔 1. Filtrar por local:

    casaArray = listDevices.filter((item) => item.local.description === "Casa");
    escritorioArray = listDevices.filter(
      (item) => item.local.description === "Escritório",
    );
    fabricaArray = listDevices.filter(
      (item) => item.local.description === "Fábrica",
    );

    // 🔔 2. Filtrar por ligado/desligado:

    itsOnArray = listDevices.filter((item) => item.is_on === true)?.length;
    itsOffArray = listDevices.filter((item) => item.is_on === false)?.length;

    casaIsON = casaArray.filter((item) => item.is_on === true)?.length;
    casaIsOFF = casaArray.filter((item) => item.is_on === false)?.length;

    escritorioIsON = escritorioArray.filter(
      (item) => item.is_on === true,
    )?.length;
    escritorioIsOFF = escritorioArray.filter(
      (item) => item.is_on === false,
    )?.length;

    fabricaIsON = fabricaArray.filter((item) => item.is_on === true)?.length;
    fabricaIsOFF = fabricaArray.filter((item) => item.is_on === false)?.length;

    // 🔔 3. Filtrar por categoria:
    casaEnergia = casaArray.filter(
      (item) => item.device.type === "Energia",
    )?.length;
    casaSegurança = casaArray.filter(
      (item) => item.device.type === "Segurança eletrônica",
    )?.length;
    casaComunicacao = casaArray.filter(
      (item) => item.device.type === "Comunicação",
    )?.length;
    casaAcesso = casaArray.filter(
      (item) => item.device.type === "Controle de Acesso",
    )?.length;

    escritorioEnergia = escritorioArray.filter(
      (item) => item.device.type === "Energia",
    )?.length;
    escritorioSegurança = escritorioArray.filter(
      (item) => item.device.type === "Segurança eletrônica",
    )?.length;
    escritorioComunicacao = escritorioArray.filter(
      (item) => item.device.type === "Comunicação",
    )?.length;
    escritorioAcesso = escritorioArray.filter(
      (item) => item.device.type === "Controle de Acesso",
    )?.length;

    fabricaEnergia = fabricaArray.filter(
      (item) => item.device.type === "Energia",
    )?.length;
    fabricaSegurança = fabricaArray.filter(
      (item) => item.device.type === "Segurança eletrônica",
    )?.length;
    fabricaComunicacao = fabricaArray.filter(
      (item) => item.device.type === "Comunicação",
    )?.length;
    fabricaAcesso = fabricaArray.filter(
      (item) => item.device.type === "Controle de Acesso",
    )?.length;

    todosEnergia = listDevices.filter(
      (item) => item.device.type === "Energia",
    )?.length;
    todosSegurança = listDevices.filter(
      (item) => item.device.type === "Segurança eletrônica",
    )?.length;
    todosComunicacao = listDevices.filter(
      (item) => item.device.type === "Comunicação",
    )?.length;
    todosAcesso = listDevices.filter(
      (item) => item.device.type === "Controle de Acesso",
    )?.length;
  }

  // 📀 Configurações do slider:

  return (
    <CarrosselDiv>
    <Carousel style={{fontSize: "2rem", height: "100%"}}> 
    <BarGraphType
    casa={[casaEnergia, casaSegurança, casaComunicacao, casaAcesso]}
    escritorio={[
      escritorioEnergia,
      escritorioSegurança,
      escritorioComunicacao,
      escritorioAcesso,
    ]}
    fabrica={[
      fabricaEnergia,
      fabricaSegurança,
      fabricaComunicacao,
      fabricaAcesso,
    ]}
    todos={[todosEnergia, todosSegurança, todosComunicacao, todosAcesso]}
    />
    <Pie ligado={itsOnArray} desligado={itsOffArray} />
    
    <BarGraphSwitch
    casa={[casaIsON, casaIsOFF]}
    escritorio={[escritorioIsON, escritorioIsOFF]}
    fabrica={[fabricaIsON, fabricaIsOFF]}
    todos={[itsOnArray, itsOffArray]}
    />
    </Carousel>
    </CarrosselDiv>
  );
};


