import React, { useState } from 'react';

function AccountSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [username, setUsername] = useState('Mgcini_Ndlovu');

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const saveSettings = () => {
    
    alert('Settings saved!');
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <div className="setting">
      <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter new username"
        />
      </div>
      <div className="setting">
        <label>Enable Notifications:</label>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={toggleNotifications}
        />
      </div>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}
export default AccountSettings;
