import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking-success");
  };

  return (
    <div>
      <h1>Room Details for Room ID: {id}</h1>
      <button onClick={handleBooking}>Book this Room</button>
    </div>
  );
};

export default RoomDetails;
