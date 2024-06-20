import React, { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BioContenedor,
  ContenedorBotones,
  BioImagen,
  BioNombre,
  BioDescripcion,
  BotonBioActivo,
  BotonBioInactivo,
} from "./bio.style";

const Bio: React.FC = () => {
  const [bioActiva, setBioActiva] = useState(INFO_SIMPSONS[NombresSimpsons.BART]);

  const onClick = (nombre: NombresSimpsons) => {
    setBioActiva(INFO_SIMPSONS[nombre]);
  };

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre) => (
      bioActiva.id === nombre ? (
        <BotonBioActivo
          key={nombre}
          onClick={() => onClick(nombre as NombresSimpsons)}
        >
          {nombre}
        </BotonBioActivo>
      ) : (
        <BotonBioInactivo
          key={nombre}
          onClick={() => onClick(nombre as NombresSimpsons)}
        >
          {nombre}
        </BotonBioInactivo>
      )
    ));
  };

  return (
    <BioContenedor>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </BioContenedor>
  );
};

export default Bio;
