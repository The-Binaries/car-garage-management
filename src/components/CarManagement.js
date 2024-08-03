import React, { useState, useEffect } from 'react';
import CarForm from './CarForm';
import CarList from './CarList';

const CarManagement = () => {
  const [cars, setCars] = useState([]);
  const [carToEdit, setCarToEdit] = useState(null);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('cars'));
    if (storedCars) {
      setCars(storedCars);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars));
  }, [cars]);

  const addCar = (car) => {
    if (carToEdit !== null) {
      const updatedCars = cars.map((c, index) =>
        index === carToEdit ? car : c
      );
      setCars(updatedCars);
      setCarToEdit(null);
    } else {
      setCars([...cars, car]);
    }
  };

  const deleteCar = (index) => {
    const updatedCars = cars.filter((_, i) => i !== index);
    setCars(updatedCars);
  };

  const editCar = (index) => {
    setCarToEdit(index);
  };

  const cancelEditCar = () => {
    setCarToEdit(null);
  };

  return (
    <div>
      <CarForm addCar={addCar} carToEdit={cars[carToEdit]} onCancelEdit={cancelEditCar} />
      <CarList cars={cars} onEdit={editCar} onDelete={deleteCar} />
    </div>
  );
};

export default CarManagement;
