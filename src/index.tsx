import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./routes";
import { CookiesProvider } from 'react-cookie';

import './index.css';

const root = document.getElementById('root')

ReactDOM.render(
  <CookiesProvider>
    <Router />
  </CookiesProvider>,
  root
);
