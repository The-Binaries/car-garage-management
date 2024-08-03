import React, { useState } from 'react';
import Header from './components/Header';
import AdminForm from './components/AdminForm';
import CarManagement from './components/CarManagement';
import MechanicManagement from './components/MechanicManagement';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validEmail = 'anurag@gmail.com';
  const validPassword = 'anuragsourabh';

  const handleLogin = (email, password) => {
    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Header />
      {!isAuthenticated ? (
        <AdminForm handleLogin={handleLogin} />
      ) : (
        <>
          
          <CarManagement />
          <MechanicManagement />
        </>
      )}
    </div>
  );
};

export default App;
