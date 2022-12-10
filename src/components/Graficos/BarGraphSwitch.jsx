import { VictoryBar, VictoryChart, VictoryGroup } from "victory";
import { Name, Legenda, Container, Border } from "./Graficos.styles";
import propTypes from "prop-types";


export const BarGraphSwitch = ({ casa, escritorio, fabrica, todos }) => {
    const dataBarLigado = [
      {
        x: "Casa",
        y: casa[0],
      },
      {
        x: "Escritório",
        y: escritorio[0],
      },
      {
        x: "Fábrica",
        y: fabrica[0],
      },
      {
        x: "Total",
        y: todos[0],
      },
    ];
    const dataBarDesligado = [
      {
        x: "Casa",
        y: casa[1],
      },
      {
        x: "Escritório",
        y: escritorio[1],
      },
      {
        x: "Fábrica",
        y: fabrica[1],
      },
      {
        x: "Total",
        y: todos[1],
      },
    ];
  
    return (
      <Container>
        <Name>Ligado e Desligado Por Local:</Name>
        <VictoryChart>
          <VictoryGroup offset={20} colorScale={["darkgreen", "darkred"]}>
            <VictoryBar data={dataBarLigado} />
            <VictoryBar data={dataBarDesligado} />
          </VictoryGroup>
        </VictoryChart>
        <Border>
          <Legenda color="darkgreen">Ligados: {dataBarLigado?.[3].y}</Legenda>
          <Legenda color="darkred">Desligados: {dataBarDesligado?.[3].y}</Legenda>
        </Border>
      </Container>
    );
  };

  BarGraphSwitch.propTypes = {
    casa: propTypes.array,
    escritorio: propTypes.array,
    fabrica: propTypes.array,
    todos: propTypes.array,
  };