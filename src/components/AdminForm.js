import React, { useState } from 'react';

const AdminForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Define the credentials for comparison
    const validEmail = 'anurag@gmail.com';
    const validPassword = 'anuragsourabh';

    // Check if the input values match the valid credentials
    if (email === validEmail && password === validPassword) {
      setMessage('Success');
      setMessageType('success');
    } else {
      setMessage('Invalid email or password');
      setMessageType('error');
    }
  };

  return (
    <div style={{ margin: '100px' }}>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>E-mail</label>
          <input
            type="email"
            placeholder="joe@schmoe.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {message && (
          <div className={`ui ${messageType} message`}>
            <div className="header">{messageType === 'success' ? 'Success' : 'Error'}</div>
            <p>{message}</p>
          </div>
        )}

        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
