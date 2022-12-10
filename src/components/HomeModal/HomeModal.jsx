import PropTypes from "prop-types";
import { StyledModal, DivContainer, ButtonHome, ImgHome } from "./HomeModalStyled.styles";
import { ButtonStyle } from "@components/ButtonStyle";
import { useDevices } from "@context/DevicesContext";
import { useState } from "react";


export const HomeModal = ({ item, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateDevices, deleteDevices } = useDevices();



  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const updateDevice = () => {
    updateDevices(item);

  };

  const deleteDevice = () => {
    deleteDevices(item);
  };



  return (
    <>
      <ButtonHome onClick={toggleModal} background={item.is_on ? "on" : "off"}>
        {children}
      </ButtonHome>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <DivContainer>
          <h4>{item.device.name}</h4>
          <p>{item.device.madeBy}</p>
          <ImgHome
            background={item.is_on ? "on" : "off"}
            src={item.device.photoUrl}
            alt="foto do device"
          />
          <div>
            <p>
              {item.local.description} | {item.room} |{" "}
            </p>
            <ButtonHome
              onClick={() => updateDevice()}
              background={item.is_on ? "on" : "off"}
            >
              {item.is_on ? "On" : "Off"}
            </ButtonHome>
          </div>
          <h3>Informações sobre Dispositivo</h3>
          <hr />
          <ul>
          <li>
            <strong>Categoria:</strong> {item.device.type}
          </li>
            <li>
              <strong>ID Virtual:</strong> {item.device.info.virtual_id}
            </li>
            <li>
              <strong>Endereço ID:</strong> {item.device.info.ip_address}
            </li>
            <li>
              <strong>Endereço Mac:</strong> {item.device.info.mac_address}
            </li>
            <li>
              <strong>Força do Sinal:</strong> {item.device.info.signal}
            </li>
          </ul>
          <ButtonStyle background="#2E4052" onClick={deleteDevice}>
            Remover
          </ButtonStyle>
        </DivContainer>
      </StyledModal>
    </>
  );
};

HomeModal.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  produto: PropTypes.object,
  item: PropTypes.object,
};
