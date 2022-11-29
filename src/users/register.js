import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";

const Register = () => {
    const [username, setUsername] = useState('alice')
    const [password, setPassword] = useState('alice123')
    const [validatePassword, setValidatePassword] = useState('alice123')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.users)
    const handleRegisterBtn = () => {
        console.log("hi")
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        // const newUser = {
        //     username: username,
        //     password: password
        // }
        const newUser = {
            username, password
        }
        dispatch(registerThunk(newUser))
    }
    return (
        <>
            <h1>Register</h1>

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

            <input
                className="form-control mb-2"
                value={validatePassword}
                onChange={(e) => setValidatePassword(e.target.value)} />

            <button onClick={handleRegisterBtn} className="btn btn-primary">
                Register
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Register