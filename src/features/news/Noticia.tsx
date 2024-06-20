import React from "react";
import {
    TarjetaNoticia,
    ImagenTarjetaNoticia,
    TituloTarjetaNoticia,
    FechaTarjetaNoticia,
    DescripcionTarjetaNoticia,
    BotonLectura,
} from "./styled";
import { INoticiasNormalizadas } from "./Noticias";

// Principio de Responsabilidad Única (SRP):
// Define la estructura de las props para el componente Noticia.
interface NoticiaProps {
    noticia: INoticiasNormalizadas;
    onVerMas: () => void;
}

// Principio de Responsabilidad Única (SRP):
// El componente Noticia tiene la única responsabilidad de mostrar una tarjeta de noticia
const Noticia: React.FC<NoticiaProps> = ({ noticia, onVerMas }) => (
    <TarjetaNoticia>
        <ImagenTarjetaNoticia src={noticia.imagen} />
        <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
        <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
        <DescripcionTarjetaNoticia>{noticia.descripcionCorta}</DescripcionTarjetaNoticia>
        <BotonLectura onClick={onVerMas}>Ver más</BotonLectura>
    </TarjetaNoticia>
);

export default Noticia;