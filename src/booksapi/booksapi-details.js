import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findBookByBooksApiId} from "./booksapi-service";
import {findBookByBooksApiIdThunk} from "./booksapi-thunks";

const BooksApiDetails = () => {
    const {booksapiID} = useParams()
    const {details} = useSelector((state) => state.booksapi)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookByBooksApiIdThunk(booksapiID))
    }, [])
    return (
        <>
            <h1>Details</h1>
            <div className="row">
                <div className="col">
                    {
                        details[0] && <ul className="list-group">
                            <li>Book Title: {details[0].book_title}</li>
                            <li>Book Author: {details[0].book_author}</li>
                            <li>Book Summary: {details[0].summary}</li>
                            <li>Publication Date: {details[0].publication_dt}</li>
                        </ul>
                    }

                </div>
            </div>
            <pre>
                {JSON.stringify(details, null, 2)}
            </pre>
        </>
    )
}

export default BooksApiDetails
