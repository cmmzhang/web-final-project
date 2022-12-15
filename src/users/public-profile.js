import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk } from "./users-thunk";
import { findBooksLikedByUserThunk } from "../likes/likes-thunks";
import { findReviewsByAuthorThunk } from "../reviews/reviews-thunks";
import { Link } from "react-router-dom";
import {
    findFollowersThunk,
    findFollowingThunk,
    followUsersThunk
} from "../follows/follows-thunk";

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


const PublicProfile = () => {
    const { uid } = useParams()
    const { publicProfile, currentUser } = useSelector((state) => state.users)
    const { likes } = useSelector((state) => state.likes)
    const { reviews } = useSelector((state) => state.reviews)
    const { followers, following } = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    const bgImage = "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2slMjBzaGVsZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"

    const handleFollowBtn = () => {
        console.log(followers)
        if (followers.filter((follow) => follow.follower._id === currentUser._id).length === 0) {
            dispatch(followUsersThunk({
                followed: uid
            }))
        } else {
            alert('You have already followed this user')
        }
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findBooksLikedByUserThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))

    }, [followers])
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
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                            Welcome to to my home page
                        </MKTypography>
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
                                    //  src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDM2MDU5Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                    width={300}
                                    height={300} />
                            </Grid>

                            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
                                <Card>
                                    <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
                                        <MKBox
                                            component="img"
                                            // src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                            src="https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MzYwNTkyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"

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
                                        {/* <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
                      My Personal Information
                    </MKTypography> */}
                                        <MKBox mt={1} mb={3}>
                                            <MKTypography variant="body2" component="p" color="text">
                                                {/* <div><span>User Name: </span>{currentUser && currentUser.username}</div>
                        <div><span>First Name: </span>{currentUser && currentUser.firstName}</div>
                        <div><span>Last Name: </span>{currentUser && currentUser.lastName}</div>
                        <div><span><i class="bi bi-mailbox"></i>  Email: </span> {currentUser && currentUser.email}</div>
                        <div><span><i class="bi bi-telephone"></i> Phone number: </span> {currentUser && currentUser.phone}</div>
                        <div><span><i class="bi bi-calendar-heart"></i> Date of Birth: </span>{currentUser && currentUser.dob}</div> */}

                                                <h1>{publicProfile && publicProfile.username}</h1>
                                                <div><span>First Name: </span>{publicProfile && publicProfile.firstName}</div>
                                                <div><span>Last Name: </span>{publicProfile && publicProfile.lastName}</div>
                                                <div>{publicProfile && publicProfile.emailVisible === 'Visible in the public profile' && publicProfile.email}</div>
                                                <div>{publicProfile && publicProfile.phoneVisible === 'Visible in the public profile' && publicProfile.phone}</div>
                                                <div>{publicProfile && publicProfile.dobVisible === 'Visible in the public profile' && publicProfile.dob}</div>
                                                {currentUser && <button
                                                    onClick={handleFollowBtn}
                                                    className="btn btn-success">
                                                    Follow
                                                </button>
                                                }
                                            </MKTypography>
                                        </MKBox>
                                    </MKBox>
                                </Card>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <img
                                    // src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    src="https://images.unsplash.com/photo-1507831228884-93d43e81a99d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0MzYwNTkyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                    width={300}
                                    height={300} />
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
                                {/* <MKTypography variant="body2" color="white" opacity={0.8}>
                  You can never get a cup of tea large enough or a book long enough to suit me.
                </MKTypography> */}
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
                                                        // src={team1}
                                                        src="https://images.unsplash.com/photo-1536237880829-dd441c249e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDc1OTkzNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                                        // alt={name}
                                                        width="100%"
                                                        borderRadius="md"
                                                        shadow="lg"
                                                    />
                                                </MKBox>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                                <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                    <MKTypography variant="h5">User's Likes</MKTypography>
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
                                                        // src={team1}
                                                        src="https://images.unsplash.com/photo-1584017975458-52cce2008518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDAxNTI2NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                                        // alt={name}
                                                        width="100%"
                                                        borderRadius="md"
                                                        shadow="lg"
                                                    />
                                                </MKBox>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                                <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                    <MKTypography variant="h5">User's Reviews</MKTypography>
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
                                                        // src={team1}
                                                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTE1Mzk2Njl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                                                        // alt={name}
                                                        width="100%"
                                                        borderRadius="md"
                                                        shadow="lg"
                                                    />
                                                </MKBox>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                                <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                    <MKTypography variant="h5">User's Followers</MKTypography>
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
                                                        // src={team1}
                                                        src="https://images.unsplash.com/photo-1550071593-fd1bdaf1f93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxJZVAtWEQ1SGNOY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                                        // alt={name}
                                                        width="100%"
                                                        borderRadius="md"
                                                        shadow="lg"
                                                    />
                                                </MKBox>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                                                <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                                                    <MKTypography variant="h5">User's Following</MKTypography>
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

            {/*

        {currentUser && <button
          onClick={handleFollowBtn}
          className="btn btn-success float-end">
          Follow
        </button>
        }
        <h1>{publicProfile && publicProfile.username}</h1>
        <div>{publicProfile && publicProfile.firstName}</div>
        <div>{publicProfile && publicProfile.lastName}</div>
        <div>{publicProfile && publicProfile.emailVisible === 'Visible in the public profile' && publicProfile.email}</div>
        <div>{publicProfile && publicProfile.phoneVisible === 'Visible in the public profile' && publicProfile.phone}</div>
        <div>{publicProfile && publicProfile.dobVisible === 'Visible in the public profile' && publicProfile.dob}</div>
        <div>
          <h2>My likes</h2>
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
        </div>
        <div>
          <h2>My reviews</h2>
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
        </div>
        <h2>Following</h2>
        <div className="list-group">
          {
            following && following.map((follow) =>
              <li className="list-group-item">
                <Link to={`/profile/${follow.followed._id}`}>
                  {follow.followed.username}
                </Link>
              </li>
            )
          }
        </div>
        <h2>Followers</h2>
        <div className="list-group">
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
        </div> */}
        </>
    )
}

export default PublicProfile;





// import React from "react";
// import {useParams} from "react-router";
// import {useState, useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {findUserByIdThunk} from "./users-thunk";
// import {findBooksLikedByUserThunk} from "../likes/likes-thunks";
// import { findReviewsByAuthorThunk } from "../reviews/reviews-thunks";
// import {Link} from "react-router-dom";
// import {
//   findFollowersThunk,
//   findFollowingThunk,
//   followUsersThunk
// } from "../follows/follows-thunk";
//
//
// const PublicProfile = () => {
//   const {uid} = useParams()
//   const {publicProfile, currentUser} = useSelector((state) => state.users)
//   const {likes} = useSelector((state) => state.likes)
//   const {reviews} = useSelector((state) => state.reviews)
//   const {followers, following} = useSelector((state) => state.follows)
//   const dispatch = useDispatch()
//
//   const handleFollowBtn = () => {
//       console.log(followers)
//       if (followers.filter((follow) => follow.follower._id === currentUser._id).length === 0) {
//           dispatch(followUsersThunk({
//               followed: uid
//           }))
//       } else {
//           alert('You have already followed this user')
//       }
//   }
//   useEffect(() => {
//     dispatch(findUserByIdThunk(uid))
//     dispatch(findBooksLikedByUserThunk(uid))
//     dispatch(findReviewsByAuthorThunk(uid))
//     dispatch(findFollowersThunk(uid))
//     dispatch(findFollowingThunk(uid))
//
//   }, [followers])
//   return(
//       <>
//           {currentUser && <button
//               onClick={handleFollowBtn}
//               className="btn btn-success float-end">
//               Follow
//           </button>
//           }
//         <h1>{publicProfile && publicProfile.username}</h1>
//         <div>{publicProfile && publicProfile.firstName}</div>
//         <div>{publicProfile && publicProfile.lastName}</div>
//         <div>{publicProfile && publicProfile.emailVisible === 'Visible in the public profile' && publicProfile.email}</div>
//         <div>{publicProfile && publicProfile.phoneVisible === 'Visible in the public profile' && publicProfile.phone}</div>
//         <div>{publicProfile && publicProfile.dobVisible === 'Visible in the public profile' && publicProfile.dob}</div>
//         <div>
//           <h2>My likes</h2>
//           <ul className="list-group">
//             {
//               likes.map((like) =>
//                   <li key={like._id} className="list-group-item">
//                     <Link to={`/details/${like.book}`}>
//                       {like.book}
//                     </Link>
//                   </li>
//               )
//             }
//           </ul>
//         </div>
//         <div>
//           <h2>My reviews</h2>
//           <ul className="list-group">
//             {
//               reviews.map((review) =>
//                   <li key={review._id} className="list-group-item">
//                     <span>book title:</span>
//                     <Link to={`/details/${review.booksapiID}`}>
//                       {review.booksapiID}
//                     </Link>
//                     <div>
//                     <span>review content: </span>
//                     <span>{review.review}</span>
//                     </div>
//                   </li>
//               )
//             }
//           </ul>
//         </div>
//         <h2>Following</h2>
//         <div className="list-group">
//           {
//             following && following.map((follow) =>
//                 <li className="list-group-item">
//                     <Link to={`/profile/${follow.followed._id}`}>
//                         {follow.followed.username}
//                     </Link>
//                 </li>
//             )
//           }
//         </div>
//         <h2>Followers</h2>
//         <div className="list-group">
//           {
//             followers && followers.map((follow) =>
//                 follow.follower &&
//                 <li className="list-group-item">
//                     <Link to={`/profile/${follow.follower._id}`}>
//                         {follow.follower.username}
//                     </Link>
//                 </li>
//             )
//           }
//         </div>
//       </>
//   )
// }
//
// export default PublicProfile