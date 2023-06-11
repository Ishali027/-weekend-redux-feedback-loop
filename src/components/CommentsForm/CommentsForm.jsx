import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

function CommentsForm () {


    const dispatch = useDispatch();
    const [comments, setComments] = useState('');
    const history = useHistory();

    const handleCommentsclick = () => {
        event.preventDefault();

        dispatch({
            type: "UPDATE_COMMENTS",
            payload: comments
        })
        history.push('/review')
    }

    const handleComments = (event) => {
        setComments(event.target.value)
        console.log('Comments:', comments);
    }


    return (
        <>
            <h1>Any comments you want to leave</h1>
            <label>Comments</label>
            <br></br>
            <input 
            type='text'
            value={comments}
            onChange={handleComments}
            />

            <button onClick={handleCommentsclick}>Next</button>
        
        
        
        </>
    )





}

export default CommentsForm