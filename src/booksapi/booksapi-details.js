import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findBookByBooksApiId} from "./booksapi-service";
import {findBookByBooksApiIdThunk} from "./booksapi-thunks";
import {userLikesBookThunk, userUnlikesBookThunk} from "../likes/likes-thunks";

const BooksApiDetails = () => {
  const {booksapiID} = useParams()
  const {details} = useSelector((state) => state.booksapi)
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findBookByBooksApiIdThunk(booksapiID))
  }, [])
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
{/*        <pre>
                {JSON.stringify(details, null, 2)}
            </pre>*/}
      </>
  )
}

export default BooksApiDetails