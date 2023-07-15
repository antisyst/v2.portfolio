import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiInfo } from 'react-icons/fi'

const BetaNotfInterface = styled.div `
position: fixed;
bottom: 20px;
color: var(--var-color-component-white);
right: 20px;
z-index: 555;
background-color: var(--var-color-component-black);
border: 2px solid var(--var-color-component-advanced);
border-radius: 4px;
padding: 20px;
font-size: 16px;
width: 47%;
transition: opacity 0.7s ease-in-out;
opacity: 0;
visibility: hidden;

@media only screen and (max-width: 768px) {
   display: none;
}

&.show {
  opacity: 1;
  visibility: visible;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: var(--var-color-component-advanced);
    filter: drop-shadow(0 0 0.75rem var(--var-color-component-advanced));
    font-size: 70px;
    margin-right: 7px;
    vertical-align: middle;
  }
  p {
    margin: 0;
    padding-bottom: 2px;
  }

  button {
    margin-left: 10px;
    padding: 13px 18px;
    border-radius: 4px;
    background: var(--var-color-component-advanced);
    color: var(--var-color-component-white);
    outline: none;
    cursor: pointer;
    font-size: 20px;
    border: 2px solid var(--var-color-component-advanced);
    font-family: "General Sans", sans-serif;
    font-weight: bold;
    transition: all 0.3s ease-out;

    @media only screen and (max-width: 768px) {
        font-size: 18px;
    }

    &:hover {
    background: none;
    }
  }
}
`

const BetaNotification: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const notificationShown = localStorage.getItem('notificationShown');
    if (!notificationShown) {
      const timer = setTimeout(() => {
        setShowNotification(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeNotification = () => {
    setShowNotification(false);
    localStorage.setItem('notificationShown', 'true');
    playAudio();
  };

  const playAudio = () => {
    const audio = new Audio('../assets/effect.wav');
    audio.play();
  };

  return (
    <BetaNotfInterface className={`beta-notification ${showNotification ? 'show' : ''}`}>
      <div className="content">
        <FiInfo />
        <p>
          The website is under construction and development. There may be some errors. It will be fixed soon.
        </p>
        <button onClick={closeNotification}>Understand</button>
      </div>
    </BetaNotfInterface>
  );
};

export default BetaNotification;
