import React from "react";
import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    CotenedorTexto,
} from "./styled";
import { CloseButton as Close } from "../../assets";
import { INoticiasNormalizadas } from "./Noticias";

// Principio de Responsabilidad Única (SRP):
// Define la estructura de las props para el componente ModalDetalle.
interface ModalDetalleProps {
    noticia: INoticiasNormalizadas;
    onClose: () => void;
}

// Principio de Responsabilidad Única (SRP):
// Principio de Segregación de Interfaces (ISP):
// SRP: El componente ModalDetalle tiene la única responsabilidad de mostrar el modal con el detalle de la noticia
// ISP: ModalDetalle tiene su propia interfaz específica para gestionar los detalles de una noticia.
const ModalDetalle: React.FC<ModalDetalleProps> = ({ noticia, onClose }) => (
    <ContenedorModal>
        <TarjetaModal>
            <CloseButton onClick={onClose}>
                <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={noticia.imagen} alt="news-image" />
            <CotenedorTexto>
                <TituloModal>{noticia.titulo}</TituloModal>
                <DescripcionModal>{noticia.descripcion}</DescripcionModal>
            </CotenedorTexto>
        </TarjetaModal>
    </ContenedorModal>
);

export default ModalDetalle;