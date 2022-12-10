import { Routes, Route } from "react-router-dom";
import { RotaPrivada } from "./RotaPrivada";


import {
  Cadastro,
  Devices,
  Login,
  Home,
  Perfil,
  Estatisticas,
} from "@pages";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/perfil" element={<RotaPrivada><Perfil /></RotaPrivada>} />

      <Route path="/home" element={<RotaPrivada><Home /></RotaPrivada>} />
      <Route path="/devices" element={<RotaPrivada><Devices /></RotaPrivada>} />
      <Route path="/estatisticas" element={<RotaPrivada><Estatisticas /></RotaPrivada>} />
    </Routes>
  );
};
