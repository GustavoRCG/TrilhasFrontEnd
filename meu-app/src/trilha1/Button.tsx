import React from "react";
import "./Button.css"; // Importando o CSS

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
