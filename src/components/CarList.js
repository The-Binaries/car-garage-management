import React from 'react';

const CarList = ({ cars, onEdit, onDelete }) => {
  return (
    <div style={{ margin: '100px' }}>
        <h2 className="ui dividing header">Car List</h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Color</th>
            <th>Year</th>
            <th>Plate Number</th>
            <th>Fault</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars && cars.length > 0 ? (
            cars.map((car, index) => (
              <tr key={index}>
                <td data-label="ID">{car.id}</td>
                <td data-label="Make">{car.make}</td>
                <td data-label="Model">{car.model}</td>
                <td data-label="Color">{car.color}</td>
                <td data-label="Year">{car.year}</td>
                <td data-label="Plate Number">{car.plateNumber}</td>
                <td data-label="Fault">{car.fault}</td>
                <td data-label="Actions">
                  <button
                    className="ui button"
                    onClick={() => onEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="ui button red"
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No cars added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
