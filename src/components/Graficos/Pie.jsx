import propTypes from "prop-types";
import { VictoryPie } from "victory";
import { Name, Legenda, Container, Border } from "./Graficos.styles";

export const Pie = ({ ligado, desligado }) => {
    const graficoEstilo = {
      data: { fillOpacity: 0.9, stroke: "white", strokeWidth: 2 },
      labels: { fontSize: 14 },
    };
  
    const dataPie = [
      { x: "Ligado", y: ligado },
      { x: "Desligado", y: desligado },
    ];
  
    return (
      <Container>
        <Name>Ligado e Desligado:</Name>
  
        <VictoryPie
          innerRadius={50}
          padding={{ left: 75, top: 0, right: 75, bottom: 0 }}
          data={dataPie}
          style={graficoEstilo}
          colorScale={["darkgreen", "darkred"]}
        />
  
        <Border>
          <Legenda color="darkgreen">Ligados: {ligado}</Legenda>
          <Legenda color="darkred">Desligados: {desligado}</Legenda>
        </Border>
      </Container>
    );
  };
  
  Pie.propTypes = {
    ligado: propTypes.number,
    desligado: propTypes.number,
  };
  