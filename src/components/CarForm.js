import React, { useState } from 'react';

const CarForm = () => {
  const initialFormData = {
    make: '',
    model: '',
    color: '',
    year: '',
    plateNumber: '',
    fault: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
    setIsModalOpen(false); 
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); 
    if (!isModalOpen) {
      setFormData(initialFormData); 
    }
  };

  return (
    <div style={{ margin: '100px' }}>
      <h2 className="ui dividing header">Car Form</h2>
      <button className="ui button primary" onClick={toggleModal}>
        Add a New Car
      </button>

      {isModalOpen && (
        <div className="ui modal active" style={{ width: '80%' }}>
          <div className="header">Add a new car</div>
          <i className="close icon" onClick={toggleModal}></i>
          <div className="content">
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="two fields">
                <div className="field">
                  <label>Make</label>
                  <input
                    type="text"
                    name="make"
                    placeholder="Car Make"
                    value={formData.make}
                    onChange={handleChange}
                  />
                </div>
                <div className="twelve wide field">
                  <label>Model</label>
                  <input
                    type="text"
                    name="model"
                    placeholder="Car Model"
                    value={formData.model}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="three fields">
                <div className="field">
                  <label>Color</label>
                  <input
                    type="text"
                    name="color"
                    placeholder="Car Color"
                    value={formData.color}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Year</label>
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Plate Number</label>
                  <input
                    type="text"
                    name="plateNumber"
                    placeholder="Car Plate Number"
                    value={formData.plateNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label>Fault</label>
                <textarea
                  rows={3}
                  name="fault"
                  placeholder="Describe the fault"
                  value={formData.fault}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="ui button primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarForm;
