import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function FeelingForm() {


    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    const handleFeelingClick = () => {
        if (feeling > 0) {
            dispatch({
                type: "UPDATE_FEELINGS",
                payload:  feeling
            })

        } else {
            alert('Must enter a number')
        }
        
    }

    const handleFeelings = (event) => {
        setFeeling(event.target.value)
        console.log('feelings level:', feeling );
    }

    return (
    <>
        <h1>How are you feeling today?</h1>
        <label>Feeling</label>
        <br></br>
        <input 
        type='number'
        value={feeling}
        onChange={handleFeelings}
        />

        <button onClick={handleFeelingClick}>Next</button>

    </>
    )
}


export default FeelingForm;