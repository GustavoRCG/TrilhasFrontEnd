import React, { useState } from "react";
import "./BuscarUsuario.css";

const BuscarUsuario: React.FC = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<any>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    setErro("");
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }
      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      setErro(error.message);
      setUsuario(null);
    }
  };

  return (
    <div className="buscar-usuario">
      <h2>Buscar Usuário pelo ID</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID do usuário"
      />
      <button onClick={buscarUsuario}>Buscar</button>
      {usuario && (
        <div className="usuario-info">
          <h3>Nome: {usuario.name}</h3>
          <p>Email: {usuario.email}</p>
        </div>
      )}
      {erro && <p className="error">{erro}</p>}
    </div>
  );
};

export default BuscarUsuario;
