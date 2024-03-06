import React from 'react';
import './Introduction.css';
const Introduction = () => {
  return (
    <div className="introduction">
      <img src={require('../src/img/introduction.png')} alt="Introduction" />
      {/* <p>Welcome to the Personality Quiz!</p> */}
      <p>Click the button below to start the quiz.</p>
      <footer className="footer">
        <p>© cheonsa</p>
      </footer>
    </div>
  );
}

export default Introduction;
