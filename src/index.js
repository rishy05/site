import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryPurple: '#8A7CFF',
  primaryBlue: '#00A3FF',
  white: '#FFFFFF',
  textDark: '#333333',
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);