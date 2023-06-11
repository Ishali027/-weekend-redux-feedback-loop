import { useDispatch } from "react-redux";




function SubmitNew() {

    const dispatch = useDispatch();


    const resetAllReducers = () => {

        dispatch({
            type: "CLEAR",
            payload: []
        })
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