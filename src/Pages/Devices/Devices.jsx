// import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import {
  ModalButton,
  SkeletonConnect,
  LoadingContainer,
} from "@components/";
import { useDevices } from "@context/DevicesContext";
import {
  Container,
  Header,
  FormDevices,
  ProdutosContainer,
  Card,
} from "./Devices.styles";

import { SearchIcon } from "@components/Icons/Icons.styles";
import { Helmet } from "react-helmet";

export const Devices = (props) => {
  const { getDevices, produtos, loading, atualiza } = useDevices();
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDevices();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <>
        <SkeletonConnect />
      </>
    );
  }

  if (atualiza) {
    return <LoadingContainer msg={"Atualizando"} />;
  }

  if (!!produtos) {    // eslint-disable-line no-extra-boolean-cast
    const handleSearch = (e) => {
      const { value } = e.target;
      setSearch(value);
    };
    const produtoFiltrado = produtos.filter((produto) =>
      produto.name.toLowerCase().includes(search.toLowerCase()),
    );

    // este botão não está funcionando pórque não temos um estado para limpar, para corrigir basta criar um estado para limpar o input e passar ele como value no input: exemplo: value={search} e no botão passar

    return (
      <Container>
        <Helmet>
          <title>Connect Lab || Devices ✨</title>
          <meta name="description" content="Catálogo Devices" />
        </Helmet>
        <Header>
          <h2>Dispositivos</h2>
          <hr />
          <FormDevices>
            <div>
              <label htmlFor="nome">Nome do dispositivo</label>
              <SearchIcon />
              <input
                placeholder="Buscar pelo nome do dispositivo"
                type="text"
                id="nome"
                name="nome"
                onChange={handleSearch}
              />
            </div>
          </FormDevices>
        </Header>
        <ProdutosContainer>
          {produtoFiltrado.map((produto) => (
            <Card key={produto._id}>
              <img src={produto.photoUrl} alt={produto.name} />
              <h4>{produto.name}</h4>
              <i>Categoria: {produto.type}</i>
              <ModalButton produto={produto} name={produto.name}>
                Adicionar
              </ModalButton>
            </Card>
          ))}
        </ProdutosContainer>
      </Container>
    );
  }
};

Devices.propTypes = {};
