import React, { useState } from "react";
import "./CadastrarUsuario.css";

const CadastrarUsuario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrarUsuario = async () => {
    setMensagem("");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: nome, email: email }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.json();
      setMensagem(`Usuário cadastrado com sucesso! ID: ${data.id}`);
      setNome("");
      setEmail("");
    } catch (error) {
      setMensagem(error.message);
    }
  };

  return (
    <div className="cadastrar-usuario">
      <h2>Cadastrar Novo Usuário</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do usuário"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email do usuário"
      />
      <button onClick={cadastrarUsuario}>Cadastrar</button>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default CadastrarUsuario;
