import axios from 'axios';

const API_URL = 'http://pets-v2.dev-apis.com/pets';

export const fetchPetsApi = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.pets;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

export const searchPetsApi = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?search=${query}`);
    return response.data.pets;
  } catch (error) {
    console.error('Error searching pets:', error);
    throw error;
  }
};
