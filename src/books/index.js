import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createBooksThunk, findAllBooksThunk} from "./books-thunks";

const Books = () => {
    const books = useSelector((state) => state.books)
    const [book, setBook] = useState({title: 'New Book'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllBooksThunk())
    }, [])
    return(
        <>
            <h1>Books</h1>
            <ul>
                <li>
                    <input
                        onChange={(e) =>
                            setBook({...book, title: e.target.value})
                        }
                        value={book.title}/>
                    <button onClick={() => {
                        dispatch(createBooksThunk(
                            {title: book.title }
                        ))
                    }}>Create</button>
                </li>
                {
                    books.map((book) =>
                        <li key={book._id}>
                            {book.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Books;