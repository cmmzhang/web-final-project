import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {findBookByBooksApiId} from "./booksapi-service";
import {findBookByBooksApiIdThunk} from "./booksapi-thunks";
// For review
import {createReviewThunk, findReviewsByBookThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";

const BooksApiDetails = () => {
    const {booksapiID} = useParams()
    const {details} = useSelector((state) => state.booksapi)
// For review
    const [review, setReview] = useState('')
    const {reviews} = useSelector((state) => state.reviews)
    const {currentUser} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookByBooksApiIdThunk(booksapiID))
        // For review
        // dispatch(findReviewsByBookThunk(booksapiID))

    }, [])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            booksapiID
        }))
    }
    return (
        <>
            <h1>Details</h1>
            <div className="row">
                <div className="col">
                    {
                        details[0] && <ul className="list-group">
                            <li>Book Title: {details[0].book_title}</li>
                            <li>Book Author: {details[0].book_author}</li>
                            <li>Book Summary: {details[0].summary}</li>
                            <li>Publication Date: {details[0].publication_dt}</li>
                        </ul>
                    }

                </div>
            </div>
            {/* For review */}
            {
                currentUser &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                    <button onClick={handlePostReviewBtn}>Post Review</button>
                </div>
            }
            <ul className="list-group">
                {
                    reviews.map((review) =>
                        <li className="list-group-item">
                            {review.review}
                            <Link to={`/profile/${review.author._id}`} className="float-end">
                                {review.author.username}
                            </Link>

                        </li>
                    )
                }
            </ul>
            {/* For review */}
            <pre>
                {JSON.stringify(details, null, 2)}
            </pre>
        </>
    )
}

export default BooksApiDetails
