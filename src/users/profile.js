
import { useSelector, useDispatch } from 'react-redux';
import {logoutThunk} from "./users-thunk";

const Profile = () => {
    const { currentUser } = useSelector((state) => state.users)
    const {likes} = useSelector((state) => state.likes)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
    }
    return (
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>

            }

            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </>

    )
}

export default Profile