import React, { useState, useContext } from 'react';
import { PetContext } from '../contexts/PetContext';

const SearchForm = () => {
  const { searchPets } = useContext(PetContext);
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPets(animal, location, breed);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={animal} onChange={(e) => setAnimal(e.target.value)} placeholder="Animal" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Breed" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
