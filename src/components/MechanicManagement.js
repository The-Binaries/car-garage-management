import React, { useState } from 'react';
import MechanicForm from './MechanicForm';
import MechanicList from './MechanicList';

const MechanicManagement = () => {
  const [mechanics, setMechanics] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addMechanic = (mechanic, index) => {
    if (index !== null) {
      // Edit existing mechanic
      setMechanics(mechanics.map((m, i) => (i === index ? mechanic : m)));
    } else {
      // Add new mechanic
      setMechanics([...mechanics, mechanic]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setMechanics(mechanics.filter((_, i) => i !== index));
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div>
      <MechanicForm
        addMechanic={addMechanic}
        mechanicToEdit={editIndex !== null ? { ...mechanics[editIndex], index: editIndex } : null}
        onCancelEdit={handleCancelEdit}
      />
      <MechanicList
        mechanics={mechanics}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MechanicManagement;
