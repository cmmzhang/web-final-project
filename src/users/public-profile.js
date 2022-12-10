import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "./users-thunk";
import {findBooksLikedByUserThunk} from "../likes/likes-thunks";
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
  const {followers, following} = useSelector((state) => state.follows)
  const dispatch = useDispatch()

  const handleFollowBtn = () => {
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
    dispatch(findFollowersThunk(uid))
    dispatch(findFollowingThunk(uid))
  }, [uid])
  return(
      <>
        <button
            onClick={handleFollowBtn}
            className="btn btn-success float-end">
          Follow
        </button>
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
        <h2>Following</h2>
        <div className="list-group">
          {
            following && following.map((follow) =>
                <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                  {follow.followed.username}
                </Link>
            )
          }
        </div>
        <h2>Followers</h2>
        <div className="list-group">
          {
            followers && followers.map((follow) =>
                <Link to={`/profile/${follow.follower._id}`} className="list-group-item">
                  {follow.follower.username}
                </Link>
            )
          }
        </div>
      </>
  )
}

export default PublicProfile