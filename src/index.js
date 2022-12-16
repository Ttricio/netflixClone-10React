import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./Redux/store"
import {Provider} from "react-redux"
import { ToggleProvider } from './utils/toggleContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleProvider>


    <App />
      </ToggleProvider>
    </Provider>
  </React.StrictMode>
);


