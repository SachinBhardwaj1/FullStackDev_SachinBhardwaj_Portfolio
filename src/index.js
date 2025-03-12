import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Or your global CSS file
import App from './App';
import { loadFull } from 'tsparticles';

// Preload particles engine as early as possible
document.addEventListener('DOMContentLoaded', async () => {
  if (window.tsParticles) {
    await loadFull(window.tsParticles);
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);