// import PropTypes from 'prop-types'
import { HomeContainer } from "./Home.styles";
import { Weather, DevicesHome } from "@components/";
import { Helmet } from "react-helmet";
export const Home = () => {
  return (
    <HomeContainer>
      <Helmet>
        <title>Connect Lab || Home ✨</title>
        <meta name="description" content="Página da Home" />
      </Helmet>
      <Weather />
      <DevicesHome />
    </HomeContainer>
  );
};
