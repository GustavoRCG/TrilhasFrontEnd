import React from "react";
import ProfileCard from "./trilha1/profileCard";
import Card from "./trilha1/card";
import Gallery from "./trilha1/Gallery";
import Navbar from "./trilha1/Navbar";
import ContactForm from "./trilha1/contactForm";
import Button from "./trilha1/Button"; // Importando o componente Button

const App: React.FC = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const handleButtonClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div>
      <Navbar />
      <h1>Meu Aplicativo</h1>
      <ProfileCard
        name="John Doe"
        description="Web Developer"
        imageUrl="https://via.placeholder.com/100"
      />
      <Card title="Título do Card" content="Conteúdo do card." />
      <Gallery images={images} />
      <Button label="Clique Aqui" onClick={handleButtonClick} />
      <ContactForm />
    </div>
  );
};

export default App;
