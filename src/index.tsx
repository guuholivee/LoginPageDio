import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/global';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Não há mais risco de null
  root.render(
    <React.StrictMode>
      <GlobalStyle />
      <App/> 
    </ React.StrictMode>
  );
} else {
  console.error('Elemento "root" não encontrado!');
};
