import React, { useState } from 'react';

const MechanicForm = () => {
  const initialFormData = {
    firstName: '',
    middleName: '',
    lastName: '',
    expertDomain: '',
    experience: ''
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
      <h2 className="ui dividing header">Mechanic Garage</h2>
      <button className="ui button primary" onClick={toggleModal}>
        Add a New Mechanic
      </button>

      {isModalOpen && (
        <div className="ui modal active" style={{ width: '80%' }}>
          <div className="header">Add a new mechanic</div>
          <i className="close icon" onClick={toggleModal}></i>
          <div className="content">
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="three fields">
                <div className="field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Expert Domain</label>
                  <input
                    type="text"
                    name="expertDomain"
                    placeholder="Expert Domain"
                    value={formData.expertDomain}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Experience (years)</label>
                  <input
                    type="number"
                    name="experience"
                    placeholder="Experience"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>
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

export default MechanicForm;
