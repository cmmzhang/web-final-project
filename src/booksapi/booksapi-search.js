import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findBookBySearchTerm} from "./booksapi-service";
import {findBookBySearchTermThunk} from "./booksapi-thunks";
import {userLikesBookThunk} from "../likes/likes-thunks";

const BooksApiSearch = () => {
    const [searchTerm, setSearchTerm] = useState('Java')
    const {books, loading} = useSelector((state) => state.booksapi)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(findBookBySearchTermThunk(searchTerm))
    }, [])
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
                          <i onClick={() => {
                            dispatch(userLikesBookThunk({ uid: 111, bid: book._id }))
                          }} className="float-end bi bi-hand-thumbs-up me-2">
                          </i>

                            {book.book_title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default BooksApiSearch