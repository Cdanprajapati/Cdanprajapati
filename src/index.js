import React from 'react';
import ReactDOM from 'react-dom/client';
// import Loader from '../src/ChildComponent/Loader';
import App from './App';
// import Toast from './Common/Toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Loader /> */}
  </React.StrictMode>
);
