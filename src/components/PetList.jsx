import React, { useContext, useEffect } from 'react';
import { PetContext } from '../contexts/PetContext';
import PetCard from './PetCard';

const PetList = () => {
  const { pets, fetchPets } = useContext(PetContext);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;
