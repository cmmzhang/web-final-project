import React, { useEffect } from "react"
import { findAllUsersThunk } from "./users-thunk"
import {useSelector, useDispatch} from "react-redux";
const UserList = () => {
    //const [users, setUsers] = useState([])
    const { users } = useSelector((state) => state.users)
    // const findAllUsers = async () => {
    //     const users = await service.findAllUsers()
    //     setUsers(users)
    // }
    const dispatch = useDispatch()
    useEffect(() => {
        // findAllUsers()
        dispatch(findAllUsersThunk())
    }, [dispatch])
    return (
        <>
            <h1>Users {users.length} </h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                        <li className="list-group-item"
                            key={user._id}>
                            {user.username}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default UserList;