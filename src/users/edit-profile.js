import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfileThunk} from "./users-thunk";
import {Navigate, useParams} from "react-router";

const EditProfile = () => {
    const {uid} = useParams()
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState(currentUser.username)
    const [password, setPassword] = useState(currentUser.password)
    const [validatePassword, setValidatePassword] = useState(currentUser.password)
    const [error, setError] = useState(null)
    const [firstName, setFirstName] = useState(currentUser.firstName)
    const [lastName, setLastName] = useState(currentUser.lastName)
    const [email, setEmail] = useState(currentUser.email)
    const [phone, setPhone] = useState(currentUser.phone)
    const [dob, setDob] = useState(currentUser.dob)
    const [type, setType] = useState(currentUser.type)

    const dispatch = useDispatch()

    const handleSubmitBtn = () => {
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
            username, password, firstName, lastName, email, phone, dob, type
        }
        dispatch(editProfileThunk(uid, newUser))
    }
    // if(currentUser) {
    //     return (<Navigate to={'/profile'}/>)
    // }
    return (
        <>
            <h1>Edit Profile</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }

            <label>UserName</label>
            <input
                className="form-control mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <div>
                <label>Password</label>
                <input
                    className="form-control mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <label>Validate Password</label>
                <input
                    className="form-control mb-2"
                    value={validatePassword}
                    onChange={(e) => setValidatePassword(e.target.value)}/>
            </div>

            <div>
                <label>First Name</label>
                <input
                    className="form-control mb-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    className="form-control mb-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
                <label>Email</label>
                <input
                    className="form-control mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Phone</label>
                <input
                    className="form-control mb-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div>
                <label>Date of Birth</label>
                <input
                    className="form-control mb-2"
                    value={dob}
                    type='date'
                    onChange={(e) => setDob(e.target.value)} />
            </div>

            <div>
                <label>Please choose a User Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="PROFESSIONAL">Professional</option>
                    <option value="STUDENT">Student</option>
                    <option value="ADMIN">Admin</option>
                </select>
            </div>

            <button onClick={handleSubmitBtn} className="btn btn-primary">
                Submit Update
            </button>
            {/*{*/}
            {/*    currentUser &&*/}
            {/*    <h2>Welcome {currentUser.username}</h2>*/}
            {/*}*/}
        </>
    )
}

export default EditProfile