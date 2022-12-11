import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {findBookByBooksApiIdThunk} from "./booksapi-thunks";

import {createReviewThunk, findReviewsByBookThunk, deleteReviewThunk} from "../reviews/reviews-thunks";

import {
  findAllLikesThunk,
  findUsersWhoLikedBookThunk,
  userLikesBookThunk,
  userUnlikesBookThunk
} from "../likes/likes-thunks";

import {Link} from "react-router-dom";
import "./index.css";

const BooksApiDetails = () => {
  const {booksapiID} = useParams()
  const {details} = useSelector((state) => state.booksapi)
  const {currentUser} = useSelector((state) => state.users)
  const {likes} = useSelector((state) => state.likes)
  
  const {reviews} = useSelector((state) => state.reviews)
  console.log("reviews in detail page",{reviews})
  console.log("likes in detail page",{likes})
  // const [rerender, setRerender] = useState(true);
  const [review, setReview] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(findBookByBooksApiIdThunk(booksapiID))
      dispatch(findUsersWhoLikedBookThunk(booksapiID))
      dispatch(findReviewsByBookThunk(booksapiID))
  }, [])

  const likeBook = () => {
    if (likes.filter((like) => like.user._id === currentUser._id).length === 0) {
      dispatch(userLikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
      dispatch(findUsersWhoLikedBookThunk(booksapiID))
    } else {
      alert('You have already liked this book');
    }
  }

  const UnlikeBook = () => {
    if (likes.filter((like) => like.user._id === currentUser._id).length !== 0) {
      dispatch(userUnlikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
      dispatch(findUsersWhoLikedBookThunk(booksapiID))
    } else {
      alert('You have not liked this book yet');
    }
  }

  const alertLogin = () => {
    alert('Warning: Please log in first');
  }

  const handlePostReviewBtn = () => {
    dispatch(createReviewThunk({
      review,
      booksapiID
    }))
    // dispatch(findReviewsByBookThunk(booksapiID))
  }



  const reviewsLimit = 5;
  const currentReview = reviews.filter((review) => review?.author?._id === currentUser?._id)
  console.log("currentReview: ", currentReview)
  let postIsDisabled = true;
  if(currentReview.length >= reviewsLimit) {
    postIsDisabled =  true
  } else {
    postIsDisabled = false
  }

  console.log("postIsDisabled: ", postIsDisabled)

  return (
      <>
        <h1>{booksapiID}</h1>
        {currentUser && <h2>{currentUser.username}</h2>}
        <div className="row">
          <div className="col">
            {
              details[0] && <ul className="list-group">
                <li>Book Title: {details[0].book_title}</li>
                <li>Book Author: {details[0].book_author}</li>
                <li>Book Summary: {details[0].summary}</li>
                <li>Publication Date: {details[0].publication_dt}</li>
                <li>ISBN: {details[0].isbn13[0]}</li>
              </ul>
            }
          </div>
        </div>

        <div className="pb-5">
          {
            !currentUser &&
            <i onClick={() => {alertLogin()}} className="float-end bi bi-hand-thumbs-down wd-enlarge me-2"></i>
          }
          {
            !currentUser &&
            <i onClick={() => {alertLogin()}} className="float-end bi bi-hand-thumbs-up wd-enlarge me-2"></i>
          }
          {
            currentUser &&
            <i onClick={() => {UnlikeBook()}} className="float-end bi bi-hand-thumbs-down wd-enlarge me-2"></i>
            /*            <i onClick={() => {
                          dispatch(userUnlikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
                        }} className="float-end bi bi-hand-thumbs-down me-2">
                        </i>*/
          }
          {
            currentUser &&
            <i onClick={() => {likeBook()}} className="float-end bi bi-hand-thumbs-up wd-enlarge me-2"></i>
          }
        </div>
        <div className="card border-secondary mb-3">
          <h2 className="card-header">People who like this book</h2>
          <ul className="list-group">
            {
              likes && likes.map((like) =>
                <>
                  {like.user &&
                  <li className="list-group-item" key={like._id}>
                    <Link to={`/profile/${like.user._id}`}>
                      {like.user.username}
                    </Link>
                  </li>
                  }
                </>
              )
            }
          </ul>
        </div>

        <div>
          <div className="card border-secondary mb-3">
          <h2 className="card-header">Related book reviews</h2>
            <ul className="list-group">
                {
                    reviews.map((review, index) => 
                    <> 
                    {review.author.username && 
                        <li className="list-group-item" key={index}>
                            {review.review}
                            <div> <span>review leaved by  </span>
                            <Link to={`/profile/${review?.author?._id}`}>
                                {review.author.username}
                            </Link>
                            <button className="float-end" disabled={currentUser?._id!==review?.author?._id} onClick={() => {
                                console.log("button clicked")
                                dispatch(deleteReviewThunk({review}))}
                              }>delete Review</button>
                              </div>
                        </li>}
                        </>
                    )
                }
              </ul>
            </div>
            <div className="card border-secondary mb-3">
            <h2 className="card-header">Post a new review</h2>
              {
              !currentUser &&
              <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
              <button onClick={() => {alertLogin()}}>Post Review</button>
              </div>
              }
              {
                currentUser && currentUser.type === 'PROFESSIONAL' &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                        {/* <span>postIsDisabled:  {postIsDisabled} </span> */}
                    {/* <button disabled={postIsDisabled}onClick={handlePostReviewBtn}>Post Review</button> */}
                    <button onClick={handlePostReviewBtn}>Post Review</button>
                </div>
              }
              {
                currentUser && currentUser.type === 'STUDENT' &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                        {/* <span>postIsDisabled:  {postIsDisabled} </span> */}
                    <button disabled={postIsDisabled} onClick={handlePostReviewBtn}>Post Review</button>
                    {/* <button onClick={handlePostReviewBtn}>Post Review</button> */}
                </div>
              }
            </div>
        </div>
      </>
  )
}

export default BooksApiDetails