import {useParams} from "react-router";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "./users-thunk";
import {findBooksLikedByUserThunk} from "../likes/likes-thunks";
import { findReviewsByAuthorThunk } from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import {
  findFollowersThunk,
  findFollowingThunk,
  followUsersThunk
} from "../follows/follows-thunk";


const PublicProfile = () => {
  const {uid} = useParams()
  const {publicProfile, currentUser} = useSelector((state) => state.users)
  const {likes} = useSelector((state) => state.likes)
  const {reviews} = useSelector((state) => state.reviews)
  const {followers, following} = useSelector((state) => state.follows)
  const dispatch = useDispatch()

  const handleFollowBtn = () => {
      console.log(followers)
      if (followers.filter((follow) => follow.follower._id === currentUser._id).length === 0) {
          dispatch(followUsersThunk({
              followed: uid
          }))
      } else {
          alert('You have already followed this user')
      }
  }
  useEffect(() => {
    dispatch(findUserByIdThunk(uid))
    dispatch(findBooksLikedByUserThunk(uid))
    dispatch(findReviewsByAuthorThunk(uid))
    dispatch(findFollowersThunk(uid))
    dispatch(findFollowingThunk(uid))

  }, [followers])
  return(
      <>
          {currentUser && <button
              onClick={handleFollowBtn}
              className="btn btn-success float-end">
              Follow
          </button>
          }
        <h1>{publicProfile && publicProfile.username}</h1>
        <div>{publicProfile && publicProfile.firstName}</div>
        <div>{publicProfile && publicProfile.lastName}</div>
        <div>{publicProfile && publicProfile.emailVisible === 'Visible in the public profile' && publicProfile.email}</div>
        <div>{publicProfile && publicProfile.phoneVisible === 'Visible in the public profile' && publicProfile.phone}</div>
        <div>{publicProfile && publicProfile.dobVisible === 'Visible in the public profile' && publicProfile.dob}</div>
        <div>
          <h2>My likes</h2>
          <ul className="list-group">
            {
              likes.map((like) =>
                  <li key={like._id} className="list-group-item">
                    <Link to={`/details/${like.book}`}>
                      {like.book}
                    </Link>
                  </li>
              )
            }
          </ul>
        </div>
        <div>
          <h2>My reviews</h2>
          <ul className="list-group">
            {
              reviews.map((review) =>
                  <li key={review._id} className="list-group-item">
                    <span>book title:</span>
                    <Link to={`/details/${review.booksapiID}`}>
                      {review.booksapiID}
                    </Link>
                    <div>
                    <span>review content: </span>
                    <span>{review.review}</span>
                    </div>
                  </li>
              )
            }
          </ul>
        </div>
        <h2>Following</h2>
        <div className="list-group">
          {
            following && following.map((follow) =>
                <li className="list-group-item">
                    <Link to={`/profile/${follow.followed._id}`}>
                        {follow.followed.username}
                    </Link>
                </li>
            )
          }
        </div>
        <h2>Followers</h2>
        <div className="list-group">
          {
            followers && followers.map((follow) =>
                follow.follower &&
                <li className="list-group-item">
                    <Link to={`/profile/${follow.follower._id}`}>
                        {follow.follower.username}
                    </Link>
                </li>
            )
          }
        </div>
      </>
  )
}

export default PublicProfile