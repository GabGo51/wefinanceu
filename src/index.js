import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Globalstyles from './Globalstyles';
import { SettingProvider } from './context/SettingContext';

//giving global styles and context to the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingProvider>
    <Globalstyles/>
    <App />
  </SettingProvider>
);


