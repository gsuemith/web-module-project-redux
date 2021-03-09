import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'react-redux'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import rootReducer from './reducers'

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <App />
  , 
  rootElement
  );
