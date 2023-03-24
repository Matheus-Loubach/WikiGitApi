import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/pages/App';
import GlobalStyle from '../src/style'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

