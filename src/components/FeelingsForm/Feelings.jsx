import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function FeelingForm() {


    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(0);

    const handleFeelingClick = () => {
        event.preventDefault();

        dispatch({
            type: "UPDATE_REVIEW",
            payload: { feeling: feeling }
        })
    }

    return (
    <>
        <h1>How are you feeling today?</h1>
        <label>Feeling</label>
        <br></br>
        <input 
        type='number'
        value={feeling}
        onChange={(event) => setFeeling(event.target.value)}
        />

        <button onClick={handleFeelingClick}>Next</button>

    </>
    )
}


export default FeelingForm;