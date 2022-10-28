import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import burgerBuilderReducer from './controller/redux/reducers/burgerBuilderReducer';
import orderReducer from './controller/redux/reducers/order'
const store = configureStore ({
  reducer: {
    orderReducer,
    burgerBuilderReducer,
  },
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>



const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
