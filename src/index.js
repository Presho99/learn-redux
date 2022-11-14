import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'


// STORE -> holds all the data or state. It is one big state that can be accessed from anywhere
// ACTION INCREMENT -> describes what you want to do(in this case, incrementing)
const increment = () => {
  return{
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return{
    type: 'DECREMENT'
  }
}
// REDUCER -> modifies the store depending on what action is taken
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};
let store = createStore(counter)
// Display it in the console
store.subscribe(() => console.log(store.getState()))

// DISPATCH -> where action is sent to the reducer
store.dispatch(increment())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
