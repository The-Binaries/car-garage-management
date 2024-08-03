import React, { useState } from 'react';

const AdminForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginSuccessful = handleLogin(email, password);

    if (loginSuccessful) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password');
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

        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>

      {message && (
        <div style={{ marginTop: '20px' }}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default AdminForm;
