import React from 'react';

const Profile = () => {
  return (
    <section id="profile">
      <h2>Your Profile</h2>
      <div className="profile-info">
        <img src="/path/to/profile-image.jpg" alt="Profile" />
        <h3>Username</h3>
        <p>Email: user@example.com</p>
        <button className="btn">Edit Profile</button>
      </div>
    </section>
  );
};

export default Profile;
