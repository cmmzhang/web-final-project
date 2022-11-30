import React, {useEffect} from "react"
import {profileThunk} from "./users-thunk";
import {useDispatch} from "react-redux";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    // const {currentUser} = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    return (children)
}

export default CurrentUser;