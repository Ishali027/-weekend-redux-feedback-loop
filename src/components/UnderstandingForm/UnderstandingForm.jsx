import { useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';


function UnderstandingForm () {

    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState(0);

    const handleUnderstandingClick = () => {
        event.preventDefault();

        dispatch({
            type: "UPDATE_REVIEW",
            payload: {understanding: understanding}
        })
    }

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <label>Understanding?</label>
            <br></br>
            <input 
            type='number'
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}
            />

            <button onClick={handleUnderstandingClick}>Next</button>
        
        
        
        </>
    )





    



}


export default UnderstandingForm;