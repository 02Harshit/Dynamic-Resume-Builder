import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animation-landing.json'; // Path to the Lottie JSON file

const Hero3D = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // Start animation on load
    animationData: animationData, // The Lottie animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Lottie options={defaultOptions} height={400} width="100%" />
    </div>
  );
};

export default Hero3D;
