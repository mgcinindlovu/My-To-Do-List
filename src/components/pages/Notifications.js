import React, { useState } from 'react';

function Notifications() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <button onClick={togglePopup}>Show Notification</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>&times;</span>
            <p>This is a notification popup!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;