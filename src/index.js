import React from 'react';
import ReactDOM from 'react-dom/client';
//Now provide the created store to component(s)
import { Provider } from 'react-redux';
//Import the store to be mad available/provided to component(s)
import { store } from './features/store';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/**Now provide the store as a prop to provider, by wrapping around the app component, thus now available to every component through APP */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

