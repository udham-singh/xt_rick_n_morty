import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.scss';
import App from './App';
import configureStore from "./shared/store";

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
