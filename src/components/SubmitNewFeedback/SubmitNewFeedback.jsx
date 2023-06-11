import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"



function SubmitNew() {

    const dispatch = useDispatch();
    const history = useHistory();

    const resetAllReducers = () => {

        dispatch({
            type: "CLEAR",
            payload: []
        })
        history.push('/')
    }






    return (
        <>
        <h1>Feedback!</h1>


        <h1>Thank you!</h1>
        <button onClick={resetAllReducers}>Leave New feedback</button>
        
        
        </>
    )
}

export default SubmitNew;