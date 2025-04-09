/*import React from "react";
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
*/

//trilha 2
/*import React from "react";
import Contador from "./trilha2/Contador";
import Saudacao from "./trilha2/Saudacao";
import ListaTarefas from "./trilha2/ListaTarefas";
import ToggleVisibilidade from "./trilha2/ToggleVisibilidade";

const App: React.FC = () => {
  const tarefasIniciais = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];

  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <Contador valorInicial={0} />
      <Saudacao nomeInicial="Usuário" />
      <ListaTarefas tarefasIniciais={tarefasIniciais} />
      <ToggleVisibilidade texto="Este é um texto que pode ser ocultado." />
    </div>
  );
};

export default App;
*/

//trilha 3
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./trilha3/components/Navbar";
import Home from "./trilha3/pages/Home";
import About from "./trilha3/pages/About";
import Contact from "./trilha3/pages/Contact";
import Animal from "./trilha3/pages/Animal";
import Rooms from "./trilha3/pages/Rooms";
import RoomDetails from "./trilha3/pages/RoomDetails";
import BookingSuccess from "./trilha3/pages/BookingSuccess";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
