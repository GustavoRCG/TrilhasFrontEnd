import React from "react";
import styles from "./ProfileCard.module.css"; // Importando CSS Modules

interface ProfileCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProfileCard;
