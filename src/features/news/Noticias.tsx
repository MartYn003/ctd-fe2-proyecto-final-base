import { useEffect, useState } from "react";
import { obtenerNoticias, INoticias } from "./fakeRest";
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import Noticia from "./Noticia";
import ModalSuscribir from "./ModalSubscribir";
import ModalDetalle from "./ModalDetalle";


// Principio de Responsabilidad Única (SRP):
// INoticiasNormalizadas es una interfaz que define la estructura de los datos de las noticas normalizados
export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

// Principio de Responsabilidad Única (SRP):
// Esta función se encarga de formatear los datos de las noticias, tiene una única responsabilidad.

const formatearDatos = (noticias: INoticias[]): INoticiasNormalizadas[] => {
  const ahora = new Date();

  return noticias.map((n) => {
    const titulo = n.titulo
      .split(" ")
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");

    const minutosTranscurridos = Math.floor(
      (ahora.getTime() - n.fecha.getTime()) / 60000
    );

    return {
      id: n.id,
      titulo,
      descripcion: n.descripcion,
      fecha: `Hace ${minutosTranscurridos} minutos`,
      esPremium: n.esPremium,
      imagen: n.imagen,
      descripcionCorta: n.descripcion.substring(0, 100),
    };
  });
};

// Principio de Responsabilidad Única (SRP):
// El componente Noticias tiene la única responsabilidad de gestionar y mostrar las noticias
const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
  
  // OCP:Podemos extender obtenerInformacion para manejar nuevas funcionalidades sin modificar el método existente.
  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();
      const datosFormateados = formatearDatos(respuesta);
      setNoticias(datosFormateados);
    };

    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <Noticia key={n.id} noticia={n} onVerMas={() => setModal(n)} />
        ))}
        {modal && (
          modal.esPremium ? (
            <ModalSuscribir onClose={() => setModal(null)} />
          ) : (
            <ModalDetalle noticia={modal} onClose={() => setModal(null)} />
          )
        )}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;