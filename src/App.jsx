import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PetProvider } from './contexts/PetContext';
import Home from './pages/Home';
import PetDetailsPage from './pages/PetDetailsPage';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <PetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<PetDetailsPage />} />
        </Routes>
      </Router>
    </PetProvider>
  </ErrorBoundary>
);

export default App;
