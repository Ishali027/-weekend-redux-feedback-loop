import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';




function Review() {

    const newFeeling = useSelector(store => store.feelingsReducer);
    const newUnderstanding = useSelector(store => store.understandingReducer);
    const newSupport = useSelector(store => store.supportReducer);
    const newcomment = useSelector(store => store.commentsReducer);

    








    
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