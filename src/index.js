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

const feelingsReducer = (state = [], action) => {
    if(action.type === "UPDATE_FEELINGS") {
        return [...state, action.payload]
    }
    else if(action.type === "CLEAR") {
        return [];
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if(action.type === "UPDATE_UNDERSTANDING") {
        return [...state, action.payload]
    }
    else if(action.type === "CLEAR") {
        return [];
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if(action.type === "UPDATE_SUPPORT") {
        return [...state, action.payload]
    }
    else if(action.type === "CLEAR") {
        return [];
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if(action.type === "UPDATE_COMMENTS") {
        return [...state, action.payload]
    }
    else if(action.type === "CLEAR") {
        return [];
    }

    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
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
