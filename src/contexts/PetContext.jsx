import { createContext, useState, useEffect } from 'react';
import { fetchPetsApi, searchPetsApi } from '../services/api';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsData = await fetchPetsApi();
        setPets(petsData);
      } catch (error) {
        console.error('Failed to fetch pets', error);
      }
    };

    fetchPets();
  }, []);

  const searchPets = async (query) => {
    try {
      const searchData = await searchPetsApi(query);
      setPets(searchData);
    } catch (error) {
      console.error('Failed to search pets', error);
    }
  };

  return (
    <PetContext.Provider value={{ pets, selectedPet, setSelectedPet, searchPets }}>
      {children}
    </PetContext.Provider>
  );
};
