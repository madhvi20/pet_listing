
import React from 'react';

const PetCard = ({ pet }) => (
  <div className="pet-card">
    <img src={pet.photo} alt={pet.name} />
    <h3>{pet.name}</h3>
    <p>{pet.breed}</p>
  </div>
);

export default PetCard;
