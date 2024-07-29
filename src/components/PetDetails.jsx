import React, { useContext } from 'react';
import { PetContext } from '../contexts/PetContext';

const PetDetails = () => {
  const { selectedPet } = useContext(PetContext);

  if (!selectedPet) {
    return <p>No pet selected</p>;
  }

  return (
    <div className="pet-details">
      <img src={selectedPet.photo} alt={selectedPet.name} />
      <h2>{selectedPet.name}</h2>
      <p>{selectedPet.breed}</p>
      <p>{selectedPet.description}</p>
    </div>
  );
};

export default PetDetails;
