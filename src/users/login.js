import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk, findAllUsersThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "../components/MKBox";
import MKTypography from "../components/MKTypography";
import MKInput from "../components/MKInput";
import MKButton from "../components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../examples/Footers/SimpleFooter";

// Images
import bgImage from "../assets/images/bg-sign-in-basic.jpeg";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser, users } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    function getUserPassword(userName) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === userName) {
                return users[i].password;
            }
        }
    }

    const handleLoginBtn = () => {
        if(getUserPassword(username) === password) {
            dispatch(loginThunk({username, password}))
        }
        else {
            alert("Invalid UserName or Password")
        }
    }

    if (currentUser) {
        navigate('/profile')
    }

    return (
        <>
            <MKBox
                position="absolute"
                top={80}
                left={0}
                zIndex={0}
                width="100%"
                minHeight="100vh"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
                <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
                    <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
                        <Card>
                            <MKBox
                                variant="gradient"
                                bgColor="info"
                                borderRadius="lg"
                                coloredShadow="info"
                                mx={2}
                                mt={-3}
                                p={2}
                                mb={1}
                                textAlign="center"
                            >
                                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                                    Sign in
                                </MKTypography>
                            </MKBox>
                            <MKBox pt={4} pb={3} px={3}>
                                <MKBox component="form" role="form">
                                    <MKBox mb={2}>
                                        <MKInput type="username" label="UserName" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth />
                                    </MKBox>
                                    <MKBox mb={2}>
                                        <MKInput type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
                                    </MKBox>
                                    <MKBox mt={4} mb={1}>
                                        <MKButton variant="gradient" color="info" onClick={handleLoginBtn} fullWidth>
                                            sign in
                                        </MKButton>
                                    </MKBox>
                                    <MKBox mt={3} mb={1} textAlign="center">
                                        <MKTypography variant="button" color="text">
                                            Don&apos;t have an account?{" "}
                                            <MKTypography
                                                component={Link}
                                                to="/register"
                                                variant="button"
                                                color="info"
                                                fontWeight="medium"
                                                textGradient
                                            >
                                                Sign up
                                            </MKTypography>
                                        </MKTypography>
                                    </MKBox>
                                </MKBox>
                            </MKBox>
                        </Card>
                    </Grid>
                </Grid>
            </MKBox>
            {/*<MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">*/}
            {/*    <SimpleFooter light />*/}
            {/*</MKBox>*/}
        </>
        // <>
        //     <h1>Login</h1>
        //     {
        //         error &&
        //         <div className="alert alert-danger">
        //             {error}
        //         </div>
        //     }
        //
        //     <input
        //         className="form-control mb-2"
        //         value={username}
        //         onChange={(e) => setUsername(e.target.value)} />
        //
        //     <input
        //         className="form-control mb-2"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)} />
        //
        //     <button onClick={handleLoginBtn} className="btn btn-primary">
        //         Login
        //     </button>
        //     {
        //         currentUser &&
        //         <h2>Welcome {currentUser.username}</h2>
        //     }
        // </>
    )
}

export default Login