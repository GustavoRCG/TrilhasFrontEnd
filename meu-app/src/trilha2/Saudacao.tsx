import React, { useState } from "react";
import "./Saudacao.css"; // Importando o CSS

interface SaudacaoProps {
  nomeInicial: string;
}

const Saudacao: React.FC<SaudacaoProps> = ({ nomeInicial }) => {
  const [nome, setNome] = useState(nomeInicial);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  return (
    <div className="saudacao">
      <h2>Olá, {nome}!</h2>
      <input type="text" value={nome} onChange={handleChange} />
    </div>
  );
};

export default Saudacao;
