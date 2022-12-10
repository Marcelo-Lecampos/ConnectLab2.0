import Skeleton from "react-loading-skeleton";
import {
  Container,
  ImgCircle,
  ImgMiniCircle,
  TextDiv,
  ListButtons
} from "./SkeletonDevicesHome.styles";
import "react-loading-skeleton/dist/skeleton.css";


export const SkeletonButtonHome= () =>{
return(
  <ListButtons>
  <Skeleton height={27} width={225} />
  </ListButtons>
)

} 

export const SkeletonDevicesHome = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <Container key={i}>
        <ImgCircle>
          <Skeleton circle height={85} width={85} />
        </ImgCircle>
        <TextDiv>
          <Skeleton count={2} style={{ marginBottom: "2rem" }} />
        </TextDiv>
        <ImgMiniCircle>
          <Skeleton circle height={40} width={40} />
        </ImgMiniCircle>
      </Container>
    ));
};
