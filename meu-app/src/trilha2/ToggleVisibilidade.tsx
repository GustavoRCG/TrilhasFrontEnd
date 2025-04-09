import React, { useState } from "react";
import "./ToggleVisibilidade.css"; // Importando o CSS

interface ToggleVisibilidadeProps {
  texto: string;
}

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visivel, setVisivel] = useState(false);

  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div className="toggle-visibilidade">
      <button onClick={alternarVisibilidade}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
};

export default ToggleVisibilidade;
