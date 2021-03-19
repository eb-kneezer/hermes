import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HermesContextProvider } from './context';


ReactDOM.render(
  <React.StrictMode>
    <HermesContextProvider>

    <App />
    </HermesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

