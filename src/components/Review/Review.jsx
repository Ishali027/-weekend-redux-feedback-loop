import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';




function Review() {

    const newFeeling = useSelector(store => store.feelingsReducer);
    const newUnderstanding = useSelector(store => store.understandingReducer);
    const newSupport = useSelector(store => store.supportReducer);
    const newComment = useSelector(store => store.commentsReducer);

    const handleSubmit = () => {

        const newReview = {
            feeling: newFeeling,
            understanding: newUnderstanding,
            support: newSupport,
            comments: newComment
        }
        console.log('New Review:', newReview)

        






    }




    return (
        <>
        <div>
            <h2>Review your feedback</h2>
            <p>Feelings: {newFeeling}</p>
            <p>Understanding: {newUnderstanding}</p>
            <p>Support: {newSupport}</p>
            <p>Comments: {newComment}</p>
        </div>



        </>
    )



    
}






// //  const postFeedback = () => {
// //     axios.post('/feedback', { feelings })
// //     .then(response => {

// //       dispatchEvent({
// //         type: "GET_FEEDBACK",
// //         payload: response.data
// //       })
// //       .catch(err => {
// //         console.log('Error in feelings', error);
// //       })
// //     })



// //   }




export default Review;