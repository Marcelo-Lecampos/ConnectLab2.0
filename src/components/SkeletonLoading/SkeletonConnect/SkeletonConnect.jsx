import Skeleton from "react-loading-skeleton";
import {
  Container,
  Header,
  FormDevices,
  ProdutosContainer,
  Card,
} from "./SkeletonConnect.styles";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonConnect = () => {
  return (
    <Container>
      <Header>
        <h2>
          <Skeleton width={300} height={30} />
        </h2>

        <hr />
        <FormDevices>
          <div>
            <Skeleton width={200} height={10} style={{ marginTop: "0rem" }} />
            <Skeleton height={20} style={{ marginTop: "1rem", width: "95%" }} />
          </div>
       
        </FormDevices>
      </Header>
      <ProdutosContainer>
        <SkeletonConnectCards cards={6} />
      </ProdutosContainer>
    </Container>
  );
};


export const SkeletonConnectCards = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <Card key={i}>
        <Skeleton
          circle
          width={80}
          height={80}
          style={{ marginBottom: "1rem" }}
        />
        <h4>
          <Skeleton width={200} height={20} />
        </h4>
        <buttom>
          <Skeleton width={100} height={40} />
        </buttom>
      </Card>
    ));
};


// <buttom>
// <Skeleton width={80} height={20} style={{ marginTop: "2rem" }} />
// </buttom>