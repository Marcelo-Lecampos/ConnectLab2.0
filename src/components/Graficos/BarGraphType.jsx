import { VictoryBar, VictoryChart, VictoryGroup } from "victory";
import { Name, Legenda, Container, Border } from "./Graficos.styles";
import propTypes from "prop-types";



export const BarGraphType = ({ casa, escritorio, fabrica, todos }) => {
    const energia = [
      { x: "Casa", y: casa[0] },
      { x: "Escritório", y: escritorio[0] },
      { x: "Fábrica", y: fabrica[0] },
      { x: "todos", y: todos[0] },
    ] ;
    
    const segurança = 
      [
        { x: "Casa", y: casa[1] },
        { x: "Escritório", y: escritorio[1] },
        { x: "Fábrica", y: fabrica[1] },
        { x: "todos", y: todos[1] },
      ];
    
      const comunicacao = [
        { x: "Casa", y: casa[2] },
        { x: "Escritório", y: escritorio[2] },
        { x: "Fábrica", y: fabrica[2] },
        { x: "todos", y: todos[2] },
      ]
    
      const acesso = [
        { x: "Casa", y: casa[3] },
        { x: "Escritório", y: escritorio[3] },
        { x: "Fábrica", y: fabrica[3] },
        { x: "todos", y: todos[3] },
      ]
    
    
      return (
        <Container>
          <Name>Categoria e Local:</Name>
          <VictoryChart>
            <VictoryGroup
              offset={10}
              colorScale={["orange", "darkblue", "darkred", "darkgreen"]}
              domainPadding={{ x: [10, 10], y: 5 }}
            >
              <VictoryBar
                energia
                data={energia}
              />
              <VictoryBar
                segurança
                data={segurança}
              />
              <VictoryBar
                comunicão
                data={comunicacao}
              />
              <VictoryBar
                controle
                de
                acesso
                data={acesso}
              />
            </VictoryGroup>
          </VictoryChart>
          <Border>
            <Legenda color="orange">Energia </Legenda>
            <Legenda color="darkblue">Segurança Eletrônica </Legenda>
            <Legenda color="darkred">Comunicação </Legenda>
            <Legenda color="darkgreen">Controle de Acesso </Legenda>
          </Border>
        </Container>
      );
    };

    BarGraphType.propTypes = {
        casa: propTypes.array,
        escritorio: propTypes.array,
        fabrica: propTypes.array,
        todos: propTypes.array,
      };
      