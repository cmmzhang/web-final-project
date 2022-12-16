import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfileThunk, findUserByIdThunk} from "./users-thunk";
import {Navigate, useParams} from "react-router";
import MKBox from "../components/MKBox";
// import bgImage from "../assets/images/bg-sign-in-basic.jpeg";
import Grid from "@mui/material/Grid";
import MKTypography from "../components/MKTypography";
import MKInput from "../components/MKInput";
import {InputLabel, MenuItem, Select} from "@mui/material";
import MKButton from "../components/MKButton";
import {useNavigate} from "react-router-dom";

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
    const [emailVisible, setEmailVisible] = useState(currentUser.emailVisible)
    const [phoneVisible, setPhoneVisible] = useState(currentUser.phoneVisible)
    const [dobVisible, setDobVisible] = useState(currentUser.dobVisible)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const bgImage = "https://images.unsplash.com/photo-1618586563625-c993ebf26c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

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
            username, password, firstName, lastName, email, emailVisible, phone, phoneVisible, dob, dobVisible
        }

        const data = {uid, newUser}
        dispatch(editProfileThunk(data))
        navigate('/login')
        // console.log("newUserGiveBack")
        // console.log(currentUser)
        // if(currentUser) {
        //     return (<Navigate to={'/profile'}/>)
        // }
    }

    return (
        <>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} lg={6}>
                    <MKBox
                        display={{ xs: "none", lg: "flex" }}
                        width="calc(100% - 2rem)"
                        height="calc(100vh - 2rem)"
                        borderRadius="lg"
                        ml={2}
                        mt={2}
                        sx={{ backgroundImage: `url(${bgImage})` }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={10}
                    md={7}
                    lg={6}
                    xl={4}
                    ml={{ xs: "auto", lg: 6 }}
                    mr={{ xs: "auto", lg: 6 }}
                >
                    <MKBox
                        bgColor="white"
                        borderRadius="xl"
                        shadow="lg"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        mt={{ xs: 20, sm: 18, md: 20 }}
                        mb={{ xs: 20, sm: 18, md: 20 }}
                        mx={-2}
                    >
                        <MKBox
                            variant="gradient"
                            bgColor="info"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={2}
                            mx={2}
                            mt={-3}
                        >
                            <MKTypography variant="h3" color="white">
                                Edit Profile
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3} pt={4} pb={3} px={3}>
                            <MKBox width="100%" component="form" method="post" autocomplete="off">
                                <MKBox mb={2}>
                                    <MKInput
                                        variant="standard"
                                        label="UserName"
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </MKBox>
                                <MKBox mb={2}>
                                    <MKInput
                                        variant="standard"
                                        label="Password"
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </MKBox>
                                <MKBox mb={2}>
                                    <MKInput
                                        variant="standard"
                                        label="Validate Password"
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        value={validatePassword}
                                        onChange={(e) => setValidatePassword(e.target.value)}
                                    />
                                </MKBox>
                                <MKBox mb={2}>
                                    <MKInput
                                        variant="standard"
                                        label="First Name"
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </MKBox>
                                <MKBox mb={2}>
                                    <MKInput
                                        variant="standard"
                                        label="Last Name"
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </MKBox>

                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            variant="standard"
                                            label="Email"
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="demo-simple-select-label">Visible</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={emailVisible}
                                            label="Visible"
                                            onChange={(e) => setEmailVisible(e.target.value)}
                                        >
                                            <MenuItem value={"Visible in the public profile"}>Visible in the public profile</MenuItem>
                                            <MenuItem value={"Not Visible in the public profile"}>Not Visible in the public profile</MenuItem>
                                        </Select>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            variant="standard"
                                            label="Phone"
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="demo-simple-select-label">Visible</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={phoneVisible}
                                            label="Visible"
                                            onChange={(e) => setPhoneVisible(e.target.value)}
                                        >
                                            <MenuItem value={"Visible in the public profile"}>Visible in the public profile</MenuItem>
                                            <MenuItem value={"Not Visible in the public profile"}>Not Visible in the public profile</MenuItem>
                                        </Select>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            variant="standard"
                                            label="Date of Birth"
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="demo-simple-select-label">Visible</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={dobVisible}
                                            label="Visible"
                                            onChange={(e) => setDobVisible(e.target.value)}
                                        >
                                            <MenuItem value={"Visible in the public profile"}>Visible in the public profile</MenuItem>
                                            <MenuItem value={"Not Visible in the public profile"}>Not Visible in the public profile</MenuItem>
                                        </Select>
                                    </Grid>
                                </Grid>
                                <MKBox mt={4} mb={1}>
                                    <MKButton variant="gradient" color="info" onClick={handleSubmitBtn} fullWidth>
                                        Submit Updates
                                    </MKButton>
                                </MKBox>
                            </MKBox>
                        </MKBox>

                    </MKBox>
                </Grid>
            </Grid>
            {/*<MKBox pt={6} px={1} mt={6}>*/}
            {/*    <DefaultFooter content={footerRoutes} />*/}
            {/*</MKBox>*/}
        </>
        // <>
        //     <MKBox
        //         position="absolute"
        //         top={100}
        //         left={0}
        //         zIndex={1}
        //         width="100%"
        //         minHeight="100vh"
        //         sx={{
        //             backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
        //                 `${linearGradient(
        //                     rgba(gradients.dark.main, 0.6),
        //                     rgba(gradients.dark.state, 0.6)
        //                 )}, url(${bgImage})`,
        //             backgroundSize: "cover",
        //             backgroundPosition: "center",
        //             backgroundRepeat: "no-repeat",
        //         }}
        //     />
        //     <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        //         <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
        //             <Grid item xs={11} sm={9} md={8} lg={7} xl={4}>
        //                 <Card>
        //                     <MKBox
        //                         variant="gradient"
        //                         bgColor="info"
        //                         borderRadius="lg"
        //                         coloredShadow="info"
        //                         mx={2}
        //                         mt={-3}
        //                         p={2}
        //                         mb={1}
        //                         textAlign="center"
        //                     >
        //                         <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
        //                             Edit Profile
        //                         </MKTypography>
        //                     </MKBox>
        //                     <MKBox pt={4} pb={3} px={3}>
        //                         <MKBox width="100%" component="form" method="post" autocomplete="off">
        //                             <MKBox mb={2}>
        //                                 <MKInput
        //                                     variant="standard"
        //                                     label="UserName"
        //                                     InputLabelProps={{ shrink: true }}
        //                                     fullWidth
        //                                 />
        //                             </MKBox>
        //                             <MKBox mb={2}>
        //                                 <MKInput
        //                                     variant="standard"
        //                                     label="Password"
        //                                     InputLabelProps={{ shrink: true }}
        //                                     fullWidth
        //                                 />
        //                             </MKBox>
        //                             <MKBox mb={2}>
        //                                 <MKInput
        //                                     variant="standard"
        //                                     label="Validate Password"
        //                                     InputLabelProps={{ shrink: true }}
        //                                     fullWidth
        //                                 />
        //                             </MKBox>
        //                             <MKBox mb={2}>
        //                                 <MKInput
        //                                     variant="standard"
        //                                     label="First Name"
        //                                     InputLabelProps={{ shrink: true }}
        //                                     fullWidth
        //                                 />
        //                             </MKBox>
        //                             <MKBox mb={2}>
        //                                 <MKInput
        //                                     variant="standard"
        //                                     label="Last Name"
        //                                     InputLabelProps={{ shrink: true }}
        //                                     fullWidth
        //                                 />
        //                             </MKBox>
        //
        //                             <Grid container spacing={3}>
        //                                 <Grid item xs={12} md={6}>
        //                                     <MKInput
        //                                         variant="standard"
        //                                         label="Email"
        //                                         InputLabelProps={{ shrink: true }}
        //                                         fullWidth
        //                                     />
        //                                 </Grid>
        //                                 <Grid item xs={12} md={6}>
        //                                     <InputLabel id="demo-simple-select-label">Visible</InputLabel>
        //                                     <Select
        //                                         labelId="demo-simple-select-label"
        //                                         id="demo-simple-select"
        //                                         value={emailVisible}
        //                                         label="Visible"
        //                                         onChange={(e) => setEmailVisible(e.target.value)}
        //                                     >
        //                                         <MenuItem value={"Visible in the public profile"}>Visible in the public profile</MenuItem>
        //                                         <MenuItem value={"Not Visible in the public profile"}>Not Visible in the public profile</MenuItem>
        //                                     </Select>
        //                                     {/*<MKInput*/}
        //                                     {/*    type="email"*/}
        //                                     {/*    variant="standard"*/}
        //                                     {/*    label="Email"*/}
        //                                     {/*    InputLabelProps={{ shrink: true }}*/}
        //                                     {/*    fullWidth*/}
        //                                     {/*/>*/}
        //                                 </Grid>
        //                             </Grid>
        //
        //                             <Grid container spacing={3}>
        //                                 <Grid item xs={12} md={6}>
        //                                     <MKInput
        //                                         variant="standard"
        //                                         label="Email"
        //                                         InputLabelProps={{ shrink: true }}
        //                                         fullWidth
        //                                     />
        //                                 </Grid>
        //                                 <Grid item xs={12} md={6}>
        //                                     <InputLabel id="demo-simple-select-label">Visible</InputLabel>
        //                                     <Select
        //                                         labelId="demo-simple-select-label"
        //                                         id="demo-simple-select"
        //                                         value={emailVisible}
        //                                         label="Visible"
        //                                         onChange={(e) => setEmailVisible(e.target.value)}
        //                                     >
        //                                         <MenuItem value={"Visible in the public profile"}>Visible in the public profile</MenuItem>
        //                                         <MenuItem value={"Not Visible in the public profile"}>Not Visible in the public profile</MenuItem>
        //                                     </Select>
        //                                 </Grid>
        //                             </Grid>
        //                             <Grid container spacing={3}>
        //                                 <Grid item xs={12} md={6}>
        //                                     <MKInput
        //                                         variant="standard"
        //                                         label="Email"
        //                                         InputLabelProps={{ shrink: true }}
        //                                         fullWidth
        //                                     />
        //                                 </Grid>
        //                                 <Grid item xs={12} md={6}>
        //                                     <InputLabel id="demo-simple-select-label">Visible</InputLabel>
        //                                     <Select
        //                                         labelId="demo-simple-select-label"
        //                                         id="demo-simple-select"
        //                                         value={emailVisible}
        //                                         label="Visible"
        //                                         onChange={(e) => setEmailVisible(e.target.value)}
        //                                     >
        //                                         <MenuItem value={"Visible in the public profile"}>Visible in the public profile</MenuItem>
        //                                         <MenuItem value={"Not Visible in the public profile"}>Not Visible in the public profile</MenuItem>
        //                                     </Select>
        //                                 </Grid>
        //                             </Grid>
        //                             <MKBox mt={4} mb={1}>
        //                                 <MKButton variant="gradient" color="info" onClick={handleSubmitBtn} fullWidth>
        //                                     Submit Update
        //                                 </MKButton>
        //                             </MKBox>
        //                         </MKBox>
        //                     </MKBox>
        //                 </Card>
        //             </Grid>
        //         </Grid>
        //     </MKBox>
        // </>
        // <>
        //     <h1>Edit Profile</h1>
        //     {
        //         error &&
        //         <div className="alert alert-danger">
        //             {error}
        //         </div>
        //     }
        //
        //     <label>UserName</label>
        //     <input
        //         className="form-control mb-2"
        //         value={username}
        //         onChange={(e) => setUsername(e.target.value)} />
        //
        //     <div>
        //         <label>Password</label>
        //         <input
        //             className="form-control mb-2"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)} />
        //     </div>
        //
        //     <div>
        //         <label>Validate Password</label>
        //         <input
        //             className="form-control mb-2"
        //             value={validatePassword}
        //             onChange={(e) => setValidatePassword(e.target.value)}/>
        //     </div>
        //
        //     <div>
        //         <label>First Name</label>
        //         <input
        //             className="form-control mb-2"
        //             value={firstName}
        //             onChange={(e) => setFirstName(e.target.value)} />
        //     </div>
        //
        //     <div>
        //         <label>Last Name</label>
        //         <input
        //             className="form-control mb-2"
        //             value={lastName}
        //             onChange={(e) => setLastName(e.target.value)} />
        //     </div>
        //
        //     <div>
        //         <label>Email</label>
        //         <input
        //             className="form-control mb-2"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)} />
        //     </div>
        //
        //     <div>
        //         <label>Phone</label>
        //         <input
        //             className="form-control mb-2"
        //             value={phone}
        //             onChange={(e) => setPhone(e.target.value)} />
        //     </div>
        //
        //     <div>
        //         <label>Date of Birth</label>
        //         <input
        //             className="form-control mb-2"
        //             value={dob}
        //             type='date'
        //             onChange={(e) => setDob(e.target.value)} />
        //     </div>
        //
        //     <div>
        //         <label>Please choose a User Type</label>
        //         <select value={type} onChange={(e) => setType(e.target.value)}>
        //             <option value="PROFESSIONAL">Professional</option>
        //             <option value="STUDENT">Student</option>
        //             <option value="ADMIN">Admin</option>
        //         </select>
        //     </div>
        //
        //     <button onClick={handleSubmitBtn} className="btn btn-primary">
        //         Submit Update
        //     </button>
        //     {/*{*/}
        //     {/*    currentUser &&*/}
        //     {/*    <h2>Welcome {currentUser.username}</h2>*/}
        //     {/*}*/}
        // </>
    )
}

export default EditProfile