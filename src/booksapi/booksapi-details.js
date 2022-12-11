import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {findBookByBooksApiIdThunk} from "./booksapi-thunks";

import {createReviewThunk, findReviewsByBookThunk} from "../reviews/reviews-thunks";

import {
  findAllLikesThunk,
  findUsersWhoLikedBookThunk,
  userLikesBookThunk,
  userUnlikesBookThunk
} from "../likes/likes-thunks";

import {Link} from "react-router-dom";

const BooksApiDetails = () => {
  const {booksapiID} = useParams()
  const {details} = useSelector((state) => state.booksapi)
  const {currentUser} = useSelector((state) => state.users)
  const {likes} = useSelector((state) => state.likes)
  const {reviews} = useSelector((state) => state.reviews)
  console.log("reviews",{reviews})
  console.log("likes",{likes})
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
    } else {
      alert('You have already liked this book');
    }
  }

  const UnlikeBook = () => {
    if (likes.filter((like) => like.user._id === currentUser._id).length !== 0) {
      dispatch(userUnlikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
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
  }

  return(
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
        {/*        <pre>
          {JSON.stringify(details, null, 2)}
        </pre>*/}

        <div className="pb-5">
          {
            !currentUser &&
            <i onClick={() => {alertLogin()}} className="float-end bi bi-hand-thumbs-up me-2"></i>
          }
          {
            !currentUser &&
            <i onClick={() => {alertLogin()}} className="float-end bi bi-hand-thumbs-down me-2"></i>
          }
          {
            currentUser &&
            <i onClick={() => {UnlikeBook()}} className="float-end bi bi-hand-thumbs-down me-2"></i>
            /*            <i onClick={() => {
                          dispatch(userUnlikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
                        }} className="float-end bi bi-hand-thumbs-down me-2">
                        </i>*/
          }
          {
            currentUser &&
            <i onClick={() => {likeBook()}} className="float-end bi bi-hand-thumbs-up me-2"></i>
            /*            <i onClick={() => {
                          dispatch(userLikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
                        }} className="float-end bi bi-hand-thumbs-up me-2">
                        </i>*/
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
            currentUser &&
            <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
              <button onClick={handlePostReviewBtn}>Post Review</button>
            </div>
          }
            <div className="card border-secondary mb-3">
              <h2 className="card-header">Related book reviews</h2>
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
            </div>
        </div>
      </>
  )
}

export default BooksApiDetails