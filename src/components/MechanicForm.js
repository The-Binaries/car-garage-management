import React, { useState, useEffect } from 'react';

const MechanicForm = ({ addMechanic, mechanicToEdit, onCancelEdit }) => {
  const initialFormData = {
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    expertDomain: '',
    experience: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (mechanicToEdit) {
      setFormData({
        ...mechanicToEdit,
        experience: mechanicToEdit.experience || ''
      });
      setIsModalOpen(true);
    }
  }, [mechanicToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mechanicToEdit) {
      addMechanic(formData, mechanicToEdit.index);
    } else {
      addMechanic(formData);
    }
    setIsModalOpen(false);
    setFormData(initialFormData);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setFormData(initialFormData);
      onCancelEdit();
    }
  };

  return (
    <div style={{ margin: '100px' }}>
      <h2 className="ui dividing header">Mechanic Form</h2>
      <button className="ui button primary" onClick={toggleModal}>
        {mechanicToEdit ? 'Edit Mechanic' : 'Add a New Mechanic'}
      </button>

      {isModalOpen && (
        <div className="ui modal active" style={{ width: '80%' }}>
          <div className="header">{mechanicToEdit ? 'Edit Mechanic' : 'Add a new mechanic'}</div>
          <i className="close icon" onClick={toggleModal}></i>
          <div className="content">
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="two wide field">
                  <label>ID</label>
                  <input
                    type="number"
                    name="id"
                    placeholder="Mechanic ID"
                    value={formData.id}
                    onChange={handleChange}
                    required
                  />
                </div>
              <div className="three fields">
                <div className="field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
