import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findBookBySearchTerm} from "./booksapi-service";
import {findBookBySearchTermThunk} from "./booksapi-thunks";
import {userLikesBookThunk} from "../likes/likes-thunks";
import {Link} from "react-router-dom";

const BooksApiSearch = () => {
  const [searchTerm, setSearchTerm] = useState('becoming')
  const {books, loading} = useSelector((state) => state.booksapi)
  console.log("books", books)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findBookBySearchTermThunk(searchTerm))
  }, [])
  return(
      <>
        <h1>The New York Times Best Sellers</h1>
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
                <li key={book.book_title}>
                  <Link to={`/details/${book.book_title}`}>
                    {book.book_title}
                  </Link>


                </li>
            )
          }
        </ul>
      </>
  )
}

export default BooksApiSearch