import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './app.global.css';
import CalcStore from './stores/Calculator'

render(
  <App store={CalcStore}/>,
  document.getElementById('root')
);
