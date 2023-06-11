import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';



const feedbackReducer = (state = [], action) => {
    if(action.type === "GET_FEEDBACK") {
        return action.payload
    }
    
    return state;
}

const reviewReducer = (state = [], action) => {
    if(action.type === "UPDATE_REVIEW") {
        return [...state, action.payload]
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
        reviewReducer
    }),
    applyMiddleware(logger)
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
