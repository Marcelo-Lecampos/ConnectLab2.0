import {

  ListButtons,
  ProdutosContainer,
  Card,
  ImgHome,
} from "./DevicesHome.styles";
import { useNavigate } from "react-router-dom";
import { DeviceSsdFillStyled } from "@components/Icons/Icons.styles";
import { useEffect, useState } from "react";
import { useDevices } from "@context/DevicesContext";
import { HomeModal, SkeletonDevicesHome, SkeletonButtonHome,  NotFound } from "@components/";

export const DevicesHome = () => {
  const navigate = useNavigate();
  const { userDevices, listDevices, loading } = useDevices();
  const [search, setSearch] = useState("");

  useEffect(() => {
    userDevices();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <>
      <SkeletonButtonHome />
      <ProdutosContainer>
        <SkeletonDevicesHome cards={6} />
      </ProdutosContainer>
      </>
    );
  };
  
  const CardSearch = (nome) => {
    if (listDevices) {
      setSearch(nome);
    }
    if (nome === "Todos") {
      setSearch("");
    }
  };

  if (!listDevices || listDevices.length === 0) {
    return (
      <NotFound onClick={() => navigate("/devices")}>
        Adicione itens <DeviceSsdFillStyled />{" "}
      </NotFound>
    );
  }

  const listFiltrado = listDevices.filter((produto) =>
    produto.local.description.toLowerCase().includes(search.toLowerCase()),
  );
  if (listDevices !== null && listDevices.length > 0 && !loading) {
    return (
      <>
        <ListButtons>
          <button onClick={(e) => CardSearch(e.target.textContent)}>
            Todos
          </button>
          <button onClick={(e) => CardSearch(e.target.textContent)}>
            Casa
          </button>
          <button onClick={(e) => CardSearch(e.target.textContent)}>
            Escritório
          </button>
          <button onClick={(e) => CardSearch(e.target.textContent)}>
            Fábrica
          </button>
        </ListButtons>
        <ProdutosContainer>
  
          {listDevices &&
            listFiltrado?.map((item) => (
              <Card key={item._id}>
                <ImgHome
                  background={item.is_on ? "on" : "off"}
                  src={item.device.photoUrl}
                  alt="foto do device"
                />
                <div>
                  <h4>
                    {item.device.name.length > 8
                      ? `${item.device.name.slice(0, 9)}...`
                      : item.device.name}
                  </h4>
                  <i>Categoria: {item.device.type} </i>
                  <p>
                    {item.local.description} | {item.room} |{" "}
                    {item.is_on ? "Ligado" : "Desligado"}
                  </p>
                </div>
                <HomeModal item={item}>{item.is_on ? "On" : "Off"}</HomeModal>
              </Card>
            ))}
        </ProdutosContainer>
      </>
    );
  }
};
