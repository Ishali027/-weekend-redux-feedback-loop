import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function CommentsForm () {


    const dispatch = useDispatch();
    const [comments, setComments] = useState('');

    const handleCommentsclick = () => {
        event.preventDefault();

        dispatch({
            type: "UPDATE_REVIEW",
            payload: {comments: comments}
        })
    }


    return (
        <>
            <h1>Any comments you want to leave</h1>
            <label>Comments</label>
            <br></br>
            <input 
            type='text'
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            />

            <button onClick={handleCommentsclick}>Next</button>
        
        
        
        </>
    )





}

export default CommentsForm