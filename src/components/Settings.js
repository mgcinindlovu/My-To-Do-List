import React from 'react';

const Settings = () => {
  return (
    <section id="settings">
      <h2>Account Settings</h2>
      <div className="settings-options">
        <div className="setting">
          <h3>Change Password</h3>
          <button className="btn">Change Password</button>
        </div>
        <div className="setting">
          <h3>Notification Preferences</h3>
          <button className="btn">Edit Notifications</button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
