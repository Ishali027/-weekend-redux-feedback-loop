import React from 'react';
import { useEffect } from 'react'
import axios from 'axios';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import FeelingForm from '../FeelingsForm/Feelings';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/Support';
import CommentsForm from '../CommentsForm/CommentsForm';
import Review from '../Review/Review';
import SubmitNew from '../SubmitNewFeedback/SubmitNewFeedback';

function App() {

  const dispatch = useDispatch()


  const getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    })
      .then((response) => {

        dispatch({
          type: "GET_FEEDBACK",
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('error on GET', error);
      })
  }

  useEffect(() => {
    getFeedback()
  }, [])


  return (

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelingForm />
      <UnderstandingForm />
      <SupportForm />
      <CommentsForm />
      <Review />
      <SubmitNew />
    </div>

  );
}

export default App;
