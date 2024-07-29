import React from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';

const Home = () => (
  <div>
    <SearchForm />
    <PetList />
  </div>
);

export default Home;
