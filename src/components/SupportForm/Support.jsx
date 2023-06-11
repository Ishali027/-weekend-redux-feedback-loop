import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function SupportForm() {

    const dispatch = useDispatch();
    const [support, setSupport] = useState(0);


    const handleSupportClick = () => {
        event.preventDefault();

        dispatch({
            type: "UPDATE_REVIEW",
            payload: {support: support}
        })
    }

    return (
        <>
            <h1>How well are you being supported?</h1>
            <label>Support</label>
            <br></br>
            <input 
            type='number'
            value={support}
            onChange={(event) => setSupport(event.target.value)}
            />
            <button onClick={handleSupportClick}>Next</button>

        
        </>
    )
}

export default SupportForm;