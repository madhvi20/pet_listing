import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PetContext } from '../contexts/PetContext';
import PetDetails from '../components/PetDetails';

const PetDetailsPage = () => {
  const { id } = useParams();
  const { setSelectedPet, pets } = useContext(PetContext);

  useEffect(() => {
    const pet = pets.find((p) => p.id === id);
    setSelectedPet(pet);
  }, [id, pets, setSelectedPet]);

  return <PetDetails />;
};

export default PetDetailsPage;
