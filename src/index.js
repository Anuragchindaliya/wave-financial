import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'assets/css/vendors/uikit.min.scss';
import 'assets/css/style.scss';
// import 'assets/fonts/rubik-v9-latin-500.woff2';



import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
