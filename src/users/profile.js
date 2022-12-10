import { useSelector, useDispatch } from 'react-redux';
import {logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router-dom";
import {Navigate} from "react-router";


const Profile = () => {
  const { currentUser } = useSelector((state) => state.users)
  const navigate = useNavigate()
  const dispatch = useDispatch()
    console.log(currentUser)
  const handleLogoutBtn = () => {
    dispatch(logoutThunk())
    navigate('/login')
  }

  console.log('')
  const handleEditProfileBtn = () => {
      navigate(`/editprofile/${currentUser._id}`)
  }

  if (!currentUser) {
        return (<Navigate to={'/login'}/>)
  }
  return (
      <>
        <h1>Profile</h1>
        <button className="btn btn-primary float-end"
        onClick={handleEditProfileBtn}>Edit Profile</button>
        {
          currentUser &&
          <h2>Welcome {currentUser.username} </h2>

        }
        <button className="btn btn-danger" onClick={handleLogoutBtn}>Logout</button>
      </>
  )
}

export default Profile