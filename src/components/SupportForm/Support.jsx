import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function SupportForm() {

    const dispatch = useDispatch();
    const [support, setSupport] = useState(0);


    const handleSupportClick = () => {
        event.preventDefault();

        dispatch({
            type: "UPDATE_SUPPORT",
            payload: support
        })
    }

    const handleSupport = (event) => {
        setSupport(event.target.value)
        console.log('Support level:', support);
    }

    return (
        <>
            <h1>How well are you being supported?</h1>
            <label>Support</label>
            <br></br>
            <input 
            type='number'
            value={support}
            onChange={handleSupport}
            />
            <button onClick={handleSupportClick}>Next</button>

        
        </>
    )
}

export default SupportForm;