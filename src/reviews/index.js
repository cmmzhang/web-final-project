// import {useDispatch, useSelector} from "react-redux";
// import {useEffect, useState} from "react";
// import {userReviewsBookThunk, findAllReviewsThunk} from "./reviews-thunks";


// const Reviews = () => {
//     const {reviews} = useSelector((state) => state.reviews)
//     const [NewReview, setnNewReview] = useState({title: 'New review'})
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(findAllReviewsThunk())
//     }, [])
//     const CreateReviewClickHandler = () => {
//         console.log(reviewBook);
//         const newReview = {uid: "111", bid: "123", review: reviewBook}
//         //a8 update frm createTuit to createTuitThunk
//         console.log("newReview in reviewClickHandler: ", newReview)
//         dispatch(userReviewsBookThunk(newReview));
//     }

//     return(
//         <>
//             <h1>Reviews</h1>
//             <ul className="list-group">
//                 <li className="list-group-item">
//                 <textarea value={reviewBook} placeholder="What's your thought?"
//                                       className="form-control border-0"
//                                       onChange={(event) => setnNewReview({...NewReview, title: event.target.value})}>
//                             </textarea>
//                             <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
//                                     onClick={CreateReviewClickHandler}>
//                                 Review
//                             </button>
//                 </li>
//                 {
//                     reviews.map((review) =>
//                         <li key={review._id}>
//                         </li>
//                     )
//                 }
//                 </ul>
//                 </>)

//             }

// export default Reviews;