import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {followUsersThunk, findFollowersThunk, findFollowingThunk} from "../follows/follows-thunks";
import { findReviewsByAuthorThunk } from "../reviews/reviews-thunks";
// import {findUserByIdThunk} 
const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.publicProfile)
    const {reviews} = useSelector((state) => state.reviews)
    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
        dispatch(followUsersThunk({
            followed: uid
        }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    }, [uid])
    return(
        <>
            <button
                onClick={handleFollowBtn}
                className="btn btn-succes float-end">
                Follow
            </button>

            <h1>{publicProfile && publicProfile.username}</h1>
            <ul>
                {
                    reviews && reviews.map((review) =>
                    <li>
                        <Link to={`/details/${review.imbd}`}></Link>
                    </li>
                    )
                }
            </ul>
            <h2>Following</h2>
            <div className="list-group"></div>
            {
                following && following.map((follow) =>
                    <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                        {follow.followed.username}
                    </Link>
                )
            }
            <h2>Followers</h2>
            <div className="list-group"></div>
            {
                followers && followers.map((follow) =>
                    <Link to={`/profile/${follow.follower._id}`} className="list-group-item">
                        {follow.follower.username}
                    </Link>
                )
            }

        </>
    )
}
export default PublicProfile