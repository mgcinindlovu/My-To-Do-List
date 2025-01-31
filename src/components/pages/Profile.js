import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('Mgcini Ndlovu');
  const [email, setEmail] = useState('mgcinindlovu597@gmail.com');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const saveProfile = () => {
    // In a real app, you'd save this data to a backend or local storage.
    alert('Profile updated!');
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="profile-info">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
      </div>
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
}

export default Profile;


