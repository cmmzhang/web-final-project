import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findBookBySearchTerm} from "./booksapi-service";
import {findBookBySearchTermThunk} from "./booksapi-thunks";
import {userLikesBookThunk} from "../likes/likes-thunks";
import {userReviewsBookThunk} from "../reviews/reviews-thunks";

const BooksApiSearch = () => {
    const [searchTerm, setSearchTerm] = useState('Java')
    //Create review
    const [reviewBook, setReviewBook] = useState('')
    const {books, loading} = useSelector((state) => state.booksapi)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(findBookBySearchTermThunk(searchTerm))
    }, [])

    const reviewClickHandler = () => {
        console.log(reviewBook);
        const newReview = {
            review: reviewBook
        }
        //a8 update frm createTuit to createTuitThunk
        dispatch(userReviewsBookThunk(111, 123));
    }


    return(
        <>
            <h1>BooksApi Search</h1>
            <input
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                value={searchTerm}/>
            <button onClick={() => {
                dispatch(findBookBySearchTermThunk(searchTerm))
            }}>Search</button>
            <ul>
                {
                    books.map((book) =>
                        <li key={book.booksapiID}>
                            <button onClick={() => {
                                dispatch(userLikesBookThunk(111, book.booksapiID))
                            }}>
                                Like
                            </button>

                            {book.book_title}

                            {/*CREATE REVIEW*/}
                            <textarea value={reviewBook} placeholder="What's your thought?"
                                      className="form-control border-0"
                                      onChange={(event) => setReviewBook(event.target.value)}>
                            </textarea>
                            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                                    onClick={reviewClickHandler}>
                                Review
                            </button>
                            {/*<button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"*/}
                            {/*        onClick={() => {*/}
                            {/*    dispatch(userReviewsBookThunk(111, book.booksapiID))*/}
                            {/*}}>*/}
                            {/*    Review*/}
                            {/*</button>*/}



                        </li>






                    )
                }
            </ul>
        </>
    )
}

export default BooksApiSearch