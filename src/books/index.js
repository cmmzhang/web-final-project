import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createBooksThunk, deleteBooksThunk, findAllBooksThunk, updateBooksThunk} from "./books-thunks";
import {
    userLikesBookThunk,
    userUnlikesBookThunk,
} from "../likes/likes-thunks";

const Books = () => {
    const {books} = useSelector((state) => state.books)
    const [book, setBook] = useState({title: 'New Book'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllBooksThunk())
    }, [])
    const likeBook = (book) => {
        const updatedBook = {
            ...book,
            likeCount: typeof book.likeCount === 'undefined' ? 1 : book.likeCount + 1
        }
        dispatch(updateBooksThunk(updatedBook))
        dispatch(userLikesBookThunk({uid:111, bid:book._id}))
    }
    const unlikeBook = (book) => {
        const updatedBook = {
            ...book,
            likeCount: typeof book.likeCount === 'undefined' ? 1 : book.likeCount - 1
        }
        dispatch(updateBooksThunk(updatedBook))
        dispatch(userUnlikesBookThunk({uid:111, bid:book._id}))
    }
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
                            <button onClick={() => {likeBook(book)}}>
                                Like
                            </button>
                            <button onClick={() => {unlikeBook(book)}}>
                                Unlike
                            </button>
                            <span> {book.likeCount} Likes</span>
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
