import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createBooksThunk, deleteBooksThunk, findAllBooksThunk } from "./books-thunks";
import { userLikesBookThunk, userUnlikesBookThunk } from "../likes/likes-thunks";

const Books = () => {
    const { currentUser } = useSelector((state) => state.users)
    const { books } = useSelector((state) => state.books)
    const [book, setBook] = useState({ title: 'New Book' })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllBooksThunk())
    }, [])
    return (
        <>
            <h1>My Book List</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>
            }
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        className="form-control w-75"
                        onChange={(e) =>
                            setBook({ ...book, title: e.target.value })
                        }
                        value={book.title} />
                    <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createBooksThunk(
                            { title: book.title }
                        ))
                    }}>Create</button>
                </li>
                {
                    books.map((book) =>
                        <li key={book._id}>
                            <i onClick={() => {
                                dispatch(deleteBooksThunk(book._id))
                            }}
                               className="bi bi-trash float-end"></i>

                            <i onClick={() => {
                                dispatch(userLikesBookThunk({ uid: 111, bid: book._id }))
                            }} className="float-end bi bi-hand-thumbs-up me-2">
                            </i>

                            <i onClick={() => {
                                dispatch(userUnlikesBookThunk({ uid: 111, bid: book._id }))
                            }} className="float-end bi bi-hand-thumbs-down me-2">
                            </i>

                            {book.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Books;