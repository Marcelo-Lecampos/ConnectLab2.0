import Skeleton from "react-loading-skeleton";
import {Container, } from "./SkeletonWeather.styles";

import "react-loading-skeleton/dist/skeleton.css";


export const SkeletonWeather= () =>{
return(
  <Container>
  
  <Skeleton height={250} style={{width: "85vw" }}/>
  </Container>
)
} 