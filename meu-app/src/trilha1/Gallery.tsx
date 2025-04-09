import React from "react";
import "./Gallery.css"; // Importando o CSS

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery item ${index}`}
          className="gallery-item"
        />
      ))}
    </div>
  );
};

export default Gallery;
