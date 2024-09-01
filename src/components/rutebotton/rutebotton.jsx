import React from 'react';
import styles from './rutebotton.module.css';
import { buttonsData, handleClick } from './rutebottonConfig';

const Buttons = ({ onRouteChange }) => {
  return (
    <div className={styles.rutebutton_container}>
      {buttonsData.map(button => (
        <button
          key={button.id}
          className={styles.rutebutton_button}
          onClick={() => handleClick(button.label, onRouteChange)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
