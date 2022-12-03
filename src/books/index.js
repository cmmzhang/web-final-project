import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    findAllLikesThunk, findBooksLikedByUserThunk
} from "../likes/likes-thunks";
import {findUserByIdThunk} from "../users/users-thunk";
import {Link} from "react-router-dom";



const Books = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {likes} = useSelector((state) => state.likes)
    const count = likes.length
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllLikesThunk())
    }, [])
    const personalLike = (uid) => {
        dispatch(findBooksLikedByUserThunk(uid))
    }
    return (
        <>
            <h1>The New York Times Books</h1>
            {
                currentUser &&
                <div>
                    <h2>Welcome {currentUser.username} </h2>
                </div>
            }
            {
                currentUser && personalLike(currentUser._id)
            }
            {
                currentUser &&
                <div>
                    <h3>My most recent like</h3>
                    <div className="row">
                        <div className="col">
                            {
                                likes[count - 1] &&
                                <div>
                                    <Link to={`/details/${likes[count - 1].book}`}>
                                        {likes[count - 1].book}
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            {
                !currentUser &&
                <div>
                    <h3>Most recent like</h3>
                    <div className="row">
                        <div className="col">
                            {
                                likes[count - 1] &&
                                <div>
                                    <Link to={`/details/${likes[count - 1].book}`}>
                                        {likes[count - 1].book}
                                    </Link>
                                    <span>
                                        &nbsp;is liked by User&nbsp;
                                    </span>
                                    <Link to={`/profile/${likes[count - 1].user}`}>
                                        {likes[count - 1].user}
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Books;