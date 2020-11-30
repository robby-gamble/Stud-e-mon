import React from 'react';
import ReactDOM from 'react-dom';
import './components/Firebase/firebase.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


serviceWorker.unregister();
