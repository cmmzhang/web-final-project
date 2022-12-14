import React, { useEffect } from "react"
import { findAllUsersThunk } from "./users-thunk"
import {useSelector, useDispatch} from "react-redux";
import MKBox from "../components/MKBox";
import Grid from "@mui/material/Grid";
import MKTypography from "../components/MKTypography";

const UserList = () => {

    const { users } = useSelector((state) => state.users)
    const bgImage = "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [dispatch])
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
                               User List
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3} pt={4} pb={3} px={3}>
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
                        </MKBox>

                    </MKBox>
                </Grid>
            </Grid>
            {/*<MKBox pt={6} px={1} mt={6}>*/}
            {/*    <DefaultFooter content={footerRoutes} />*/}
            {/*</MKBox>*/}
        </>
    )
}

export default UserList;