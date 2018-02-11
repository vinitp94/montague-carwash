import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App               from './app/App';

ReactDOM.render(
  <BrowserRouter basename="/montague-carwash">
    <App />
  </BrowserRouter>,

  document.getElementById('root'),
);
