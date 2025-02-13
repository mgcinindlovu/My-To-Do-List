import React from 'react';

const Notifications = () => {
  return (
    <section id="notifications">
      <h2>Your Notifications</h2>
      <ul className="notifications-list">
        <li>You have a new message!</li>
        <li>Your order has been shipped.</li>
        <li>New products have arrived!</li>
      </ul>
    </section>
  );
};

export default Notifications;
