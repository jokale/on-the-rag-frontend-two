// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {Provider} from 'react-redux'
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import userReducer from './reducers/userReducer'

// import * as serviceWorker from './serviceWorker';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// let store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)))


// ReactDOM.render(
//   <Provider store={store}> 

//     <App />

// </Provider>

// ,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));