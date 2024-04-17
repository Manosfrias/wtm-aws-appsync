import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { SpeakersProvider } from './contexts/speakersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeakersProvider>
      <App />
    </SpeakersProvider>
  </React.StrictMode>
);
