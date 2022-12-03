import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findBookByBooksApiIdThunk} from "./booksapi-thunks";
import {
  findUsersWhoLikedBookThunk,
  userLikesBookThunk,
  userUnlikesBookThunk
} from "../likes/likes-thunks";
import {Link} from "react-router-dom";
import {createBooksThunk, updateBooksThunk} from "../books/books-thunks";

const BooksApiDetails = () => {
  const {booksapiID} = useParams()
  const {details} = useSelector((state) => state.booksapi)
  const {currentUser} = useSelector((state) => state.users)
  const {likes} = useSelector((state) => state.likes)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findBookByBooksApiIdThunk(booksapiID))
    dispatch(findUsersWhoLikedBookThunk(booksapiID))
  }, [])
/*  const likeBook = (book) => {
    if (!book.liked) {
      const updatedBook = {
        ...book,
        liked: true,
        likeCount: typeof book.likeCount === 'undefined' ? 1 : book.likeCount + 1
      }
      dispatch(updateBooksThunk(updatedBook))
      dispatch(userLikesBookThunk({uid: currentUser._id, bid: booksapiID}))
    }
  }*/
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
        <pre>
          {JSON.stringify(details, null, 2)}
        </pre>
        <div>
          {
            currentUser &&
            <i onClick={() => {
              dispatch(userLikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
            }} className="float-end bi bi-hand-thumbs-up me-2">
            </i>
          }
          {
            currentUser &&
            <i onClick={() => {
              dispatch(userUnlikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
            }} className="float-end bi bi-hand-thumbs-down me-2">
            </i>
          }
        </div>
        <div>
          <h2>People who like this book</h2>
          <ul className="list-group">
            {
                likes.map((like) =>
                <li className="list-group-item" key={like._id}>
                  <Link to={`/profile/${like.user._id}`}>
                    {like.user.username}
                  </Link>
                </li>
              )
            }
          </ul>
        </div>

      </>
  )
}

export default BooksApiDetails