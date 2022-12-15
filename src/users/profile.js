import { useSelector, useDispatch } from 'react-redux';
import {findMyInfoThunk, findUserByIdThunk, logoutThunk} from "./users-thunk";
import {Link, useNavigate} from "react-router-dom";
import {Navigate} from "react-router";
import React, {useEffect} from "react";
import {findBooksLikedByUserThunk} from "../likes/likes-thunks";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findFollowersThunk, findFollowingThunk} from "../follows/follows-thunk";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../components/MKBox";
import MKTypography from "../components/MKTypography";
import MKButton from "../components/MKButton";

// Material Kit 2 React examples
import DefaultFooter from "../examples/Footers/DefaultFooter";
import Stack from "@mui/material/Stack";
// About Us page sections
import Information from "../pages/LandingPages/AboutUs/sections/Information";
import Team from "../pages/LandingPages/AboutUs/sections/Team";


// Images
import bgImage from "../assets/images/bg-about-us.jpg";
import HorizontalTeamCard from "../examples/Cards/TeamCards/HorizontalTeamCard";
import team1 from "../assets/images/team-5.jpg";
import team2 from "../assets/images/bruce-mars.jpg";
import team3 from "../assets/images/ivana-squares.jpg";
import team4 from "../assets/images/ivana-square.jpg";
import DefaultInfoCard from "../examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../examples/Cards/BlogCards/CenteredBlogCard";
import MuiLink from "@mui/material/Link";

const Profile = () => {
      const { currentUser } = useSelector((state) => state.users)
      const navigate = useNavigate()
      const {likes} = useSelector((state) => state.likes)
      const {reviews} = useSelector((state) => state.reviews)
      const {followers, following} = useSelector((state) => state.follows)
      const dispatch = useDispatch()

      const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
      }



      console.log('')
      const handleEditProfileBtn = () => {
          navigate(`/editprofile/${currentUser._id}`)
      }
        useEffect(() => {
            dispatch(findMyInfoThunk(currentUser._id))
            dispatch(findBooksLikedByUserThunk(currentUser._id))
            dispatch(findReviewsByAuthorThunk(currentUser._id))
            dispatch(findFollowersThunk(currentUser._id))
            dispatch(findFollowingThunk(currentUser._id))

        }, [])

    if (!currentUser) {
        return (<Navigate to={'/login'}/>)
    }

        return (
            <>
                <MKBox
                    minHeight="75vh"
                    width="100%"
                    sx={{
                        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            `${linearGradient(
                                rgba(gradients.dark.main, 0.6),
                                rgba(gradients.dark.state, 0.6)
                            )}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    <Container>
                        <Grid
                            container
                            item
                            xs={12}
                            lg={8}
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            sx={{ mx: "auto", textAlign: "center" }}
                        >
                            <MKTypography
                                variant="h1"
                                color="white"
                                sx={({ breakpoints, typography: { size } }) => ({
                                    [breakpoints.down("md")]: {
                                        fontSize: size["3xl"],
                                    },
                                })}
                            >
                                Welcome to your Profile, {currentUser.username}!
                            </MKTypography>
                            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                                Here you could view your book list, review list, following and followers
                            </MKTypography>
                            <Stack direction="row" spacing={1} mt={3}>
                                <MKButton onClick={handleEditProfileBtn}
                                          color="default"
                                          sx={{ color: ({ palette: { dark } }) => dark.main }}>
                                    Edit Profile
                                </MKButton>
                                <MKButton onClick={handleLogoutBtn}
                                          color="default"
                                          sx={{ color: ({ palette: { dark } }) => dark.main }}>
                                    Log Out
                                </MKButton>
                            </Stack>
                            {/*<MKTypography variant="h6" color="white" mt={8} mb={1}>*/}
                            {/*    Find us on*/}
                            {/*</MKTypography>*/}
                            {/*<MKBox display="flex" justifyContent="center" alignItems="center">*/}
                            {/*    <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>*/}
                            {/*        <i className="fab fa-facebook" />*/}
                            {/*    </MKTypography>*/}
                            {/*    <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>*/}
                            {/*        <i className="fab fa-instagram" />*/}
                            {/*    </MKTypography>*/}
                            {/*    <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>*/}
                            {/*        <i className="fab fa-twitter" />*/}
                            {/*    </MKTypography>*/}
                            {/*    <MKTypography component="a" variant="body1" color="white" href="#">*/}
                            {/*        <i className="fab fa-google-plus" />*/}
                            {/*    </MKTypography>*/}
                            {/*</MKBox>*/}
                        </Grid>
                    </Container>
                </MKBox>
                <Card
                    sx={{
                        p: 2,
                        mx: { xs: 2, lg: 3 },
                        mt: -8,
                        mb: 4,
                        boxShadow: ({ boxShadows: { xxl } }) => xxl,
                    }}
                >
                    <MKBox component="section" py={6}>
                        <Container>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={12} lg={4}>
                                    <img
                                     src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    width={300}
                                    height={300}/>
                                </Grid>

                                <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
                                    <Card>
                                        <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
                                            <MKBox
                                                component="img"
                                                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                                alt="My Personal Information"
                                                borderRadius="lg"
                                                width="100%"
                                                position="relative"
                                                zIndex={1}
                                            />
                                            <MKBox
                                                borderRadius="lg"
                                                shadow="md"
                                                width="100%"
                                                height="100%"
                                                position="absolute"
                                                left={0}
                                                top={0}
                                                sx={{
                                                    backgroundImage: `url("https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`,
                                                    transform: "scale(0.94)",
                                                    filter: "blur(12px)",
                                                    backgroundSize: "cover",
                                                }}
                                            />
                                        </MKBox>
                                        <MKBox p={3} mt={-1} textAlign="center">
                                            <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
                                                My Personal Information
                                            </MKTypography>
                                            <MKBox mt={1} mb={3}>
                                                <MKTypography variant="body2" component="p" color="text">
                                                    <div>{currentUser && currentUser.username}</div>
                                                    <div>{currentUser && currentUser.firstName}</div>
                                                    <div>{currentUser && currentUser.lastName}</div>
                                                    <div>{currentUser && currentUser.email}</div>
                                                    <div>{currentUser && currentUser.phone}</div>
                                                    <div>{currentUser && currentUser.dob}</div>
                                                </MKTypography>
                                            </MKBox>
                                        </MKBox>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <img
                                        src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        width={300}
                                        height={300}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </MKBox>
                    <MKBox
                        component="section"
                        variant="gradient"
                        bgColor="dark"
                        position="relative"
                        py={6}
                        px={{ xs: 2, lg: 0 }}
                        mx={-2}
                    >
                        <Container>
                            <Grid container>
                                <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                                    <MKTypography variant="h3" color="white">
                                        View List
                                    </MKTypography>
                                    <MKTypography variant="body2" color="white" opacity={0.8}>
                                        You can never get a cup of tea large enough or a book long enough to suit me.
                                    </MKTypography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={6}>
                                    <MKBox mb={1}>
                                        <Card sx={{ mt: 3 }}>
                                            <Grid container>
                                                <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
                                                    <MKBox width="100%" pt={2} pb={1} px={2}>
                                                        <MKBox
                                                            component="img"
                                                            src={team1}
                                                            // alt={name}
                                                            width="100%"
                                                            borderRadius="md"
                                                            shadow="lg"
                                                        />
                                                    </MKBox>
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                                    <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                        <MKTypography variant="h5">My Likes</MKTypography>
                                                        {/*<MKTypography variant="h6" color={position.color} mb={1}>*/}
                                                        {/*    {position.label}*/}
                                                        {/*</MKTypography>*/}
                                                        <MKTypography variant="body2" color="text">
                                                            <ul className="list-group">
                                                                {
                                                                    likes.map((like) =>
                                                                        <li key={like._id} className="list-group-item">
                                                                            <Link to={`/details/${like.book}`}>
                                                                                {like.book}
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </MKTypography>
                                                    </MKBox>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </MKBox>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <MKBox mb={1}>
                                        <Card sx={{ mt: 3 }}>
                                            <Grid container>
                                                <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
                                                    <MKBox width="100%" pt={2} pb={1} px={2}>
                                                        <MKBox
                                                            component="img"
                                                            src={team1}
                                                            // alt={name}
                                                            width="100%"
                                                            borderRadius="md"
                                                            shadow="lg"
                                                        />
                                                    </MKBox>
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                                    <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                        <MKTypography variant="h5">My Reviews</MKTypography>
                                                        {/*<MKTypography variant="h6" color={position.color} mb={1}>*/}
                                                        {/*    {position.label}*/}
                                                        {/*</MKTypography>*/}
                                                        <MKTypography variant="body2" color="text">
                                                            <ul className="list-group">
                                                                {
                                                                    reviews.map((review) =>
                                                                        <li key={review._id} className="list-group-item">
                                                                            <span>book title:</span>
                                                                            <Link to={`/details/${review.booksapiID}`}>
                                                                                {review.booksapiID}
                                                                            </Link>
                                                                            <div>
                                                                                <span>review content: </span>
                                                                                <span>{review.review}</span>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </MKTypography>
                                                    </MKBox>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </MKBox>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <MKBox mb={{ xs: 1, lg: 0 }}>
                                        <Card sx={{ mt: 3 }}>
                                            <Grid container>
                                                <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
                                                    <MKBox width="100%" pt={2} pb={1} px={2}>
                                                        <MKBox
                                                            component="img"
                                                            src={team1}
                                                            // alt={name}
                                                            width="100%"
                                                            borderRadius="md"
                                                            shadow="lg"
                                                        />
                                                    </MKBox>
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                                    <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                        <MKTypography variant="h5">My Followers</MKTypography>
                                                        {/*<MKTypography variant="h6" color={position.color} mb={1}>*/}
                                                        {/*    {position.label}*/}
                                                        {/*</MKTypography>*/}
                                                        <MKTypography variant="body2" color="text">
                                                            <ul className="list-group">
                                                                {
                                                                    followers && followers.map((follow) =>
                                                                        follow.follower &&
                                                                        <li className="list-group-item">
                                                                            <Link to={`/profile/${follow.follower._id}`}>
                                                                                {follow.follower.username}
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                }
                                                        </ul>

                                                        </MKTypography>
                                                    </MKBox>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </MKBox>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <MKBox mb={{ xs: 1, lg: 0 }}>
                                        <Card sx={{ mt: 3 }}>
                                            <Grid container>
                                                <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
                                                    <MKBox width="100%" pt={2} pb={1} px={2}>
                                                        <MKBox
                                                            component="img"
                                                            src={team1}
                                                            // alt={name}
                                                            width="100%"
                                                            borderRadius="md"
                                                            shadow="lg"
                                                        />
                                                    </MKBox>
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                                    <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                        <MKTypography variant="h5">My Following</MKTypography>
                                                        {/*<MKTypography variant="h6" color={position.color} mb={1}>*/}
                                                        {/*    {position.label}*/}
                                                        {/*</MKTypography>*/}
                                                        <MKTypography variant="body2" color="text">
                                                            <ul className="list-group">
                                                                {
                                                                    following && following.map((follow) =>
                                                                        <li className="list-group-item">
                                                                            <Link to={`/profile/${follow.followed._id}`}>
                                                                                {follow.followed.username}
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </MKTypography>
                                                    </MKBox>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </MKBox>
                                </Grid>
                            </Grid>
                        </Container>
                    </MKBox>

                </Card>
                {/*<MKBox pt={6} px={1} mt={6}>*/}
                {/*    <DefaultFooter content={footerRoutes} />*/}
                {/*</MKBox>*/}
            </>
          // <>
          //   <h1>Profile</h1>
          //   <button className="btn btn-primary float-end"
          //   onClick={handleEditProfileBtn}>Edit Profile</button>
          //   {
          //     currentUser &&
          //     <h2>Welcome {currentUser.username} </h2>
          //   }
          //   <button className="btn btn-danger" onClick={handleLogoutBtn}>Logout</button>
          //
          //     <h1>{currentUser && currentUser.username}</h1>
          //     <div>{currentUser && currentUser.firstName}</div>
          //     <div>{currentUser && currentUser.lastName}</div>
          //     <div>{currentUser && currentUser.email}</div>
          //     <div>{currentUser && currentUser.phone}</div>
          //     <div>{currentUser && currentUser.dob}</div>
          //     <div>
          //         <h2>My likes</h2>
          //         <ul className="list-group">
          //             {
          //                 likes.map((like) =>
          //                     <li key={like._id} className="list-group-item">
          //                         <Link to={`/details/${like.book}`}>
          //                             {like.book}
          //                         </Link>
          //                     </li>
          //                 )
          //             }
          //         </ul>
          //     </div>
          //     <div>
          //         <h2>My reviews</h2>
          //         <ul className="list-group">
          //             {
          //                 reviews.map((review) =>
          //                     <li key={review._id} className="list-group-item">
          //                         <span>book title:</span>
          //                         <Link to={`/details/${review.booksapiID}`}>
          //                             {review.booksapiID}
          //                         </Link>
          //                         <div>
          //                             <span>review content: </span>
          //                             <span>{review.review}</span>
          //                         </div>
          //                     </li>
          //                 )
          //             }
          //         </ul>
          //     </div>
          //     <h2>Following</h2>
          //     <div className="list-group">
          //         {
          //             following && following.map((follow) =>
          //                 <li className="list-group-item">
          //                     <Link to={`/profile/${follow.followed._id}`}>
          //                         {follow.followed.username}
          //                     </Link>
          //                 </li>
          //             )
          //         }
          //     </div>
          //     <h2>Followers</h2>
          //     <div className="list-group">
          //         {
          //             followers && followers.map((follow) =>
          //                 follow.follower &&
          //                 <li className="list-group-item">
          //                     <Link to={`/profile/${follow.follower._id}`}>
          //                         {follow.follower.username}
          //                     </Link>
          //                 </li>
          //             )
          //         }
          //     </div>
          // </>
      )
}

export default Profile