import { useSelector, useDispatch } from "react-redux";


function Review() {
    const reviewReducer = useSelector(store => store.reviewReducer)

    const dispatch = useDispatch();





//  const postFeedback = () => {
//     axios.post('/feedback', { feelings })
//     .then(response => {

//       dispatchEvent({
//         type: "GET_FEEDBACK",
//         payload: response.data
//       })
//       .catch(err => {
//         console.log('Error in feelings', error);
//       })
//     })



//   }




    return (
        <div>





            {reviewReducer.map}
        </div>
    )








}



export default Review;






