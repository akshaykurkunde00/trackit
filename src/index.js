// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store';
import App from './App';
import {createRoot} from 'react-dom/client'

const container=document.getElementById('root')
const root=createRoot(container);


if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission !== 'granted') {
      alert('You need to allow notifications for alarms to work!');
    }
  });
}


root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
