import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    findAllLikesThunk, findBooksLikedByUserThunk
} from "../likes/likes-thunks";
import {findUserByIdThunk} from "../users/users-thunk";
import {findReviewsByAuthorThunk, findAllReviewsThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";



const Books = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {likes} = useSelector((state) => state.likes)
    const {reviews} = useSelector((state) => state.reviews)
    const reviews_count = reviews.length
    const count = likes.length
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllLikesThunk())
        dispatch(findAllReviewsThunk())
    }, [])

    useEffect(() => {
        if(currentUser && currentUser._id) {
            dispatch(findBooksLikedByUserThunk(currentUser._id))
            dispatch(findReviewsByAuthorThunk(currentUser._id))
        } 
    }, [currentUser])

    console.log("likes",likes )
    console.log("reviews",reviews )

    const author_name=  reviews[reviews_count-1]?.author

    // console.log("author_name", author_name)
    // 638ef27b2fa52f4c2da28fd1

    // console.log("like",likes[count - 1]?.user)
    // reviews[reviews_count-1] && reviews[reviews_count-1]?.author



    return (
        <>
            <h1 className="fw-bold">
                Bookwarms - The New York Times Books
            </h1>


            <img src={require("./landingpageimage.png")} width="100%px" height="400px"/>

            {
                currentUser &&
                <div>
                    <h2>Welcome {currentUser.username} </h2>
                </div>
            }
            <div className="card border-secondary mb-3">
                <h3 className="card-header">About</h3>
                <div className="row card-body">
                    <p>Bookwarms web app helps readers search information about book reviews, and customize book reading lists. </p>
                </div>
            </div>
            {
                currentUser &&
                <div className="card border-secondary mb-3">
                    <h3 className="card-header"> My most recent like </h3>
                    <div className="row card-body">
                        <div className="col">
                            {
                                likes[count - 1] &&
                                <div>
                                    <Link to={`/details/${likes[count - 1].book}`}>
                                        {likes[count - 1].book}
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            {
                !currentUser &&
                <div className="card border-secondary mb-3">
                    <h3 className="card-header">Most recent like</h3>
                    <div className="row card-body">
                        <div className="col">
                            {
                                likes[count - 1] &&
                                <div>
                                    <Link to={`/details/${likes[count - 1].book}`}>
                                        {likes[count - 1].book}
                                    </Link>
                                    <span>
                                        &nbsp;is liked by User&nbsp;
                                    </span>
                                    <Link to={`/profile/${likes[count - 1].user}`}>
                                        {likes[count - 1].user}
                                    </Link>
                                    {/* <Link to={`/profile/${likes[count - 1].user._id}`}>
                                        {likes[count - 1]?.user}
                                    </Link> */}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }

            {
                currentUser &&
                <div className="card border-secondary mb-3">
                    <h3 className="card-header"> My most recent review</h3>
                    <div className="row card-body">
                        <div className="col">
                            {
                                reviews[reviews_count-1] &&
                                <div>
                                    <Link to={`/details/${reviews[reviews_count-1].booksapiID}`}>
                                        {reviews[reviews_count-1].booksapiID}
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            } 
            {
                !currentUser &&
                <div className="card border-secondary mb-3">
                    <h3 className="card-header">Most recent Review</h3>
                    <div className="row card-body">
                        <div className="col">
                            {
                                reviews[reviews_count-1] &&
                                <div>
                                    <Link to={`/details/${reviews[reviews_count-1].booksapiID}`}>
                                        {reviews[reviews_count-1].booksapiID}
                                    </Link>
                                    <span>
                                        &nbsp;is reviewed by User&nbsp;
                                    </span>
                                    <Link to={`/profile/${reviews[reviews_count-1].author}`}>
                                        {reviews[reviews_count-1].author}
                                    </Link>

                                    {/* <Link to={`/profile/${author_name}`}>
                                        {author_name }
                                    </Link> */}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Books;