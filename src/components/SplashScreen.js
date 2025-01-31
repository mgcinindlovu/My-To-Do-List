import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function SplashScreen({ onFinish }) {
  return (
    <div className="splash-screen">
      <h1 className="catchy-hi">Hi!</h1>
      <h2>Welcome to Mgcini Bootcamp Roadmap</h2>
      <button onClick={onFinish} className="proceed-button">
        Proceed <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default SplashScreen;