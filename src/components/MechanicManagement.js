import React, { useState } from 'react';
import MechanicForm from './MechanicForm';
import MechanicList from './MechanicList';

const MechanicManagement = () => {
    const [mechanics, setMechanics] = useState([]);
    const [mechanicToEdit, setMechanicToEdit] = useState(null);
  
    const addMechanic = (newMechanic, index = null) => {
      if (index !== null) {
        const updatedMechanics = mechanics.map((mechanic, i) =>
          i === index ? newMechanic : mechanic
        );
        setMechanics(updatedMechanics);
      } else {
        setMechanics([...mechanics, newMechanic]);
      }
    };
  
    const editMechanic = (index) => {
      setMechanicToEdit({ ...mechanics[index], index });
    };
  
    const deleteMechanic = (index) => {
      const updatedMechanics = mechanics.filter((_, i) => i !== index);
      setMechanics(updatedMechanics);
    };
  
    const cancelEdit = () => {
      setMechanicToEdit(null);
    };
  
    return (
      <div>
        <MechanicForm
          addMechanic={addMechanic}
          mechanicToEdit={mechanicToEdit}
          onCancelEdit={cancelEdit}
        />
        <MechanicList
          mechanics={mechanics}
          onEdit={editMechanic}
          onDelete={deleteMechanic}
        />
      </div>
    );
  };
  
export default MechanicManagement;
