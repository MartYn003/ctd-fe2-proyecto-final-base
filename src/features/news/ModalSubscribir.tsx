import React from "react";
import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    BotonSuscribir,
    CotenedorTexto,
} from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";

interface ModalSuscribirProps {
    onClose: () => void;
}


// Principio de Responsabilidad Única (SRP):
// Principio de Segregación de Interfaces (ISP):
// SRP: El componente ModalSuscribir tiene la única responsabilidad de mostrar el modal de suscripción
// ISP: ModalSuscribir tiene su propia interfaz específica para gestionar la suscripción.
const ModalSuscribir: React.FC<ModalSuscribirProps> = ({ onClose }) => (
    <ContenedorModal>
        <TarjetaModal>
            <CloseButton onClick={onClose}>
                <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
            <CotenedorTexto>
                <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                <DescripcionModal>
                    Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.
                </DescripcionModal>
                <BotonSuscribir onClick={() => setTimeout(() => {
                    alert("Suscripto!");
                    onClose();
                }, 1000)}>
                    Suscríbete
                </BotonSuscribir>
            </CotenedorTexto>
        </TarjetaModal>
    </ContenedorModal>
);

export default ModalSuscribir;