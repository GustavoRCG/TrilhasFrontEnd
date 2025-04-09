import React, { useState } from "react";
import "./Contador.css"; // Importando o CSS

interface ContadorProps {
  valorInicial: number;
}

const Contador: React.FC<ContadorProps> = ({ valorInicial }) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className="contador">
      <h2>Contador: {contador}</h2>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default Contador;
