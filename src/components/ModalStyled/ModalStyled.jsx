import PropTypes from "prop-types";
import { StyledModal, FormContainer } from "./ModalStyled.styles";
import { useState } from "react";
import { ButtonStyle } from "@components/ButtonStyle";
import { useForm } from "react-hook-form";
import { useDevices } from "@context/DevicesContext";

export const ModalButton = ({ children, name, produto }) => {
  const { addDevices } = useDevices();
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, register } = useForm();

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  function onSubmit(dados) {
    const { _id } = produto;
    const { local, room } = dados;
    const dataStorage = JSON.parse(localStorage.getItem("usuario"));
    const { _id: idUser } = dataStorage;
    const enviarDados = {
      user: idUser,
      device: _id,
      is_on: true,
      local,
      room,
    };
    addDevices(enviarDados);
  }

  return (
    <>
      <ButtonStyle onClick={toggleModal}>{children}</ButtonStyle>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1>{name}</h1>
          <label htmlFor="local">Local</label>
          <select id="local" {...register("local")}>
            <option disabled>Selecione</option>
            <option value="631b34696f2d2f24a7c0c960">Casa</option>
            <option value="631b34796f2d2f24a7c0c961">Escritório</option>
            <option value="631b348a6f2d2f24a7c0c962">Fábrica</option>
          </select>

          <label htmlFor="room">Cômodo*</label>
          <input
            required
            type="text"
            id="room"
            {...register("room")}
            placeholder="Cômodo*"
          />

          <div>
            <ButtonStyle background="#2E4052" onClick={toggleModal}>
              Cancelar
            </ButtonStyle>
            <ButtonStyle>Adicionar</ButtonStyle>
          </div>
        </FormContainer>
      </StyledModal>
    </>
  );
};

ModalButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  produto: PropTypes.object.isRequired,
};

