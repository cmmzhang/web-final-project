import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createBooksThunk, deleteBooksThunk, findAllBooksThunk} from "./books-thunks";
import {userLikesBookThunk, userUnlikesBookThunk} from "../likes/likes-thunks";

const Books = () => {
    const {books} = useSelector((state) => state.books)
    const [book, setBook] = useState({title: 'New Book'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllBooksThunk())
    }, [])
    return(
        <>
            <h1>Books</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        className="form-control w-75"
                        onChange={(e) =>
                            setBook({...book, title: e.target.value})
                        }
                        value={book.title}/>
                    <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createBooksThunk(
                            {title: book.title }
                        ))
                    }}>Create</button>
                </li>
                {
                    books.map((book) =>
                        <li key={book._id}>
                            <button onClick={() => {
                                dispatch(userLikesBookThunk({uid:111, bid:book._id}))
                            }}>
                                Like
                            </button>

                            <button onClick={() => {
                                dispatch(userUnlikesBookThunk({uid:111, bid:book._id}))
                            }}>
                                Unlike
                            </button>
                            <button onClick={() => {
                                dispatch(deleteBooksThunk(book._id))
                            }}>
                                Delete
                            </button>
                            {book.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Books;
