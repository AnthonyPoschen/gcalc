import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
//import './app.global.css';
import CalcStore from './stores/Calculator'

//require('bootstrap-loader');

import { MuiThemeProvider } from 'material-ui/styles';

import 'typeface-roboto'
render(
  <MuiThemeProvider>
    <App store={CalcStore}/>
  </MuiThemeProvider>,
  document.getElementById('root')
);
