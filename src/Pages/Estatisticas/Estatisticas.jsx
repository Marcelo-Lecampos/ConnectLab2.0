import { Container } from "./Estatisticas.styles";
import { NotFound, LoadingContainer, Graficos } from "@components/";
import { DeviceSsdFillStyled } from "@components/Icons/Icons.styles";
import { useDevices } from "@context/DevicesContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// const Graficos = lazy(() => import("@components"));
import { Helmet } from "react-helmet";

export const Estatisticas = (props) => {
  const { userDevices, listDevices, loading } = useDevices();
  const navigate = useNavigate();

  useEffect(() => {
    userDevices();
    console.log("listDevices: ", listDevices);
    console.log("local description", listDevices[0]?.local.description);
    console.log("local description", listDevices[0]?.device.type);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    <LoadingContainer />;
  }

  if (!listDevices || listDevices.length === 0) {
    return (
      <NotFound onClick={() => navigate("/devices")}>
        Adicione itens <DeviceSsdFillStyled />{" "}
      </NotFound>
    );
  }

  return (
    <Container>
      <Helmet>
        <title>Connect Lab || Estatisticas ✨</title>
        <meta name="description" content="Estatisticas sobre os devices" />
      </Helmet>
      <Graficos />
    </Container>
  );
};
// The above error occurred in one of your React components:

// Lazy
// div
// O2@http://localhost:5173/node_modules/.vite/deps/chunk-SD572DBZ.js?v=c80fef53:1259:6
// Suspense
// Estatisticas@http://localhost:5173/src/pages/Estatisticas/Estatisticas.jsx:31:7
// RotaPrivada@http://localhost:5173/src/routes/RotaPrivada.jsx:20:28
// RenderedRoute@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=c80fef53:2408:7
// Routes@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=c80fef53:2706:7
// Rotas
// main
// Fe@http://localhost:5173/node_modules/.vite/deps/chunk-SD572DBZ.js?v=c80fef53:1214:40
// AppLayout@http://localhost:5173/src/layouts/App/AppLayout.jsx:26:7
// CustomThemeProvider@http://localhost:5173/src/context/CustomTheme/CustomThemeProvider.jsx:22:36
// DevicesProvider@http://localhost:5173/src/context/DevicesContext/DevicesProvider.jsx:23:32
// AutenticacaoProvider@http://localhost:5173/src/context/Autenticacao/AutenticacaoProvider.jsx:23:37
// h@http://localhost:5173/node_modules/.vite/deps/styled-react-modal.js?v=c80fef53:88:12
// Router@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=c80fef53:2657:7
// BrowserRouter@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=c80fef53:3038:7
// SkeletonTheme@http://localhost:5173/node_modules/.vite/deps/react-loading-skeleton.js?v=c80fef53:80:23
// App

// Consider adding an error boundary to your tree to customize error handling behavior.
// Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

// este erro ocorreu pois o lazy não estava sendo importado corretamente, o lazy é um componente que carrega o componente de forma assíncrona, ou seja, ele carrega o componente apenas quando o usuário acessar a página, e não quando a aplicação é carregada. ´Para corrigir o erro, basta importar o lazy do react e colocar o componente que será carregado dentro do lazy, como no exemplo abaixo:
// src\Pages\Estatisticas\Estatisticas.jsx
