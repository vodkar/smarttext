import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <HashRouter basename="/text_editor">
          <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
