import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./shared/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter basename={'/wheelson'}>
          <Provider store={store}>
              <App />
          </Provider>
      </HashRouter>
  </React.StrictMode>
);
