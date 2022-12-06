import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";

const Login = () => {
    const [username, setUsername] = useState('alice')
    const [password, setPassword] = useState('alice123')

    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.users)

    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
        } catch (e) {
        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return (
        <>
            <h1>Login</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }

            <input
                className="form-control mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                className="form-control mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLoginBtn} className="btn btn-primary">
                Login
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Login