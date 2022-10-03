import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, combineReducers } from 'redux'
import reducer from './store/reducers/burgerBuilderReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import orderReducer from './store/reducers/order'
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer'
import authReducer from './store/reducers/auth'
import { configureStore } from '@reduxjs/toolkit'
// pakeicianti reduceriu action typus i atitinkamus interfeisus vietoj any typo neleidzia deklaruoti reducerio


// const rootReducer = combineReducers({
//   orderReducer,
//   burgerBuilderReducer,
//   authReducer,
// })

const store = configureStore ({
  reducer: {
    orderReducer,
    burgerBuilderReducer,
    authReducer : authReducer
  },
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
    
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
