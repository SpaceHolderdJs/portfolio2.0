import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from 'modules/router/router';
import { ThreeProvider } from 'modules/three/ThreeContext';
import { AudioProvider } from 'modules/ui/components/Audio/AudioContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <AudioProvider>
    <ThreeProvider>
      <RouterProvider router={router} />
    </ThreeProvider>
  </AudioProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
