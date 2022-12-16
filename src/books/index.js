import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    findAllLikesThunk, findBooksLikedByUserThunk
} from "../likes/likes-thunks";
import {findAllUsersThunk, findUserByIdThunk} from "../users/users-thunk";
import {findReviewsByAuthorThunk, findAllReviewsThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "../components/MKBox";
import MKButton from "../components/MKButton";
import MKTypography from "../components/MKTypography";

// Images
import bgImage from "../books/landingpageimage.png";


const Books = () => {
    const {currentUser, users} = useSelector((state) => state.users)
    const {likes} = useSelector((state) => state.likes)
    const {reviews} = useSelector((state) => state.reviews)
    const reviews_count = reviews.length
    const count = likes.length
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllLikesThunk())
        dispatch(findAllReviewsThunk())
    }, [])
    console.log("{{likes}}", {likes})
    console.log("{reviews}", {reviews})
    useEffect(() => {
        if(currentUser && currentUser._id) {
            dispatch(findBooksLikedByUserThunk(currentUser._id))
            dispatch(findReviewsByAuthorThunk(currentUser._id))
        }
        dispatch(findAllUsersThunk())
    }, [currentUser])

    function getUsername(userId) {
        for (var i = 0; i < users.length; i++) {
            if (users[i]._id === userId) {
                return users[i].username;
            }
        }
    }

    return (
        <>
        <MKBox position="relative" width="100%" left={0} right={0} mt={3}>
            <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
                <Container>
                    <Grid container flexDirection="row" alignItems="center">
                        {/*<MKTypography*/}
                        {/*    // component={Link}*/}
                        {/*    href="#"*/}
                        {/*    variant="button"*/}
                        {/*    color="white"*/}
                        {/*    fontWeight="regular"*/}
                        {/*    py={0.8125}*/}
                        {/*    mr={2}*/}
                        {/*>*/}
                        {/*    Fun To Read*/}
                        {/*</MKTypography>*/}
                        {/*<MKButton*/}
                        {/*    variant="outlined"*/}
                        {/*    color="white"*/}
                        {/*    sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}*/}
                        {/*>*/}
                        {/*    <MKBox component="i" color="white" className="fas fa-bars" />*/}
                        {/*</MKButton>*/}
                        <MKBox
                            component="ul"
                            display={{ xs: "none", lg: "flex" }}
                            p={0}
                            my={0}
                            mx="auto"
                            sx={{ listStyle: "none" }}
                        >
                            {/*<MKBox component="li">*/}
                            {/*    <MKTypography*/}
                            {/*        component={Link}*/}
                            {/*        href="#"*/}
                            {/*        variant="button"*/}
                            {/*        color="white"*/}
                            {/*        fontWeight="regular"*/}
                            {/*        p={1}*/}
                            {/*        onClick={(e) => e.preventDefault()}*/}
                            {/*    >*/}
                            {/*        Home*/}
                            {/*    </MKTypography>*/}
                            {/*</MKBox>*/}
                            {/*<MKBox component="li">*/}
                            {/*    <MKTypography*/}
                            {/*        component={Link}*/}
                            {/*        href="#"*/}
                            {/*        variant="button"*/}
                            {/*        color="white"*/}
                            {/*        fontWeight="regular"*/}
                            {/*        p={1}*/}
                            {/*        onClick={(e) => e.preventDefault()}*/}
                            {/*    >*/}
                            {/*        About Us*/}
                            {/*    </MKTypography>*/}
                            {/*</MKBox>*/}
                            {/*<MKBox component="li">*/}
                            {/*    <MKTypography*/}
                            {/*        component={Link}*/}
                            {/*        href="#"*/}
                            {/*        variant="button"*/}
                            {/*        color="white"*/}
                            {/*        fontWeight="regular"*/}
                            {/*        p={1}*/}
                            {/*        onClick={(e) => e.preventDefault()}*/}
                            {/*    >*/}
                            {/*        Contact Us*/}
                            {/*    </MKTypography>*/}
                            {/*</MKBox>*/}
                        </MKBox>
                        <MKBox
                            component="ul"
                            display={{ xs: "none", lg: "flex" }}
                            p={0}
                            m={0}
                            sx={{ listStyle: "none" }}
                        >
                            <MKBox component="li">
                                <MKTypography
                                    component={Link}
                                    href="#"
                                    variant="button"
                                    p={1}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <MKBox component="i" color="white" className="fab fa-twitter" />
                                </MKTypography>
                            </MKBox>
                            <MKBox component="li">
                                <MKTypography
                                    component={Link}
                                    href="#"
                                    variant="button"
                                    p={1}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <MKBox component="i" color="white" className="fab fa-facebook" />
                                </MKTypography>
                            </MKBox>
                            <MKBox component="li">
                                <MKTypography
                                    component={Link}
                                    href="#"
                                    variant="button"
                                    p={1}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <MKBox component="i" color="white" className="fab fa-instagram" />
                                </MKTypography>
                            </MKBox>
                        </MKBox>
                    </Grid>
                </Container>
            </MKBox>
            <MKBox
                // position="absolute"
                display="flex"
                alignItems="center"
                minHeight="100vh"
                width="100%"
                sx={{
                    backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Container>
                    <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
                        <MKTypography
                            variant="h1"
                            color="white"
                            mb={3}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            Welcome to the Book World!
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
                            Bookworm web app helps readers search information about book reviews, and customize book reading lists.
                        </MKTypography>
                        {/*<Stack direction="row" spacing={1} mt={3}>*/}
                        {/*    <MKButton color="white">Get Started</MKButton>*/}
                        {/*    <MKButton variant="text" color="white">*/}
                        {/*        Read more*/}
                        {/*    </MKButton>*/}
                        {/*</Stack>*/}
                    </Grid>
                </Container>
            </MKBox>
        </MKBox>
        {/*//     <h1 className="fw-bold">*/}
        {/*//         Bookwarms - The New York Times Books*/}
        {/*//     </h1>*/}
        {/*//*/}
        {/*//*/}
        {/*//     <img src={require("./landingpageimage.png")} width="100%px" height="400px"/>*/}
        {/*//*/}
        {/*    {*/}
        {/*        currentUser &&*/}
        {/*        <div>*/}
        {/*            <h2>Welcome {currentUser.username} </h2>*/}
        {/*        </div>*/}
        {/*    }*/}
        {/*    <div className="card border-secondary mb-3">*/}
        {/*        <h3 className="card-header">About</h3>*/}
        {/*        <div className="row card-body">*/}
        {/*            <p>Bookworm web app helps readers search information about book reviews, and customize book reading lists. </p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    {*/}
            <MKTypography variant="h3" mt={2} mb={1}>
                Check the latest
            </MKTypography>
            <MKBox
                variant="gradient"
                bgColor="info"
                coloredShadow="info"
                borderRadius="lg"
                p={1}
                mt={1}
            >
                { currentUser && <MKTypography variant="h3" color="white">
                    My most recent like
                </MKTypography> }
                { !currentUser && <MKTypography variant="h3" color="white">
                    The most recent like on the website
                </MKTypography> }
            </MKBox>
            <MKBox p={1} width="100%" component="form" method="post" autocomplete="off">
                {currentUser && likes[count - 1] &&
                <div>
                    <Link to={`/details/${likes[count - 1].book}`}>
                        {likes[count - 1].book}
                    </Link>
                </div>}
            </MKBox>
            <MKBox p={1} width="100%" component="form" method="post" autocomplete="off">
                {!currentUser && likes[count - 1] &&
                <div>
                    <Link to={`/details/${likes[count - 1].book}`}>
                        {likes[count - 1].book}
                    </Link>
                    <span>
                        &nbsp;is liked by User&nbsp;
                    </span>
                    <Link to={`/profile/${likes[count - 1].user}`}>
                        {getUsername(likes[count - 1].user)}
                    </Link>
                </div>}
            </MKBox>

            <MKBox
                variant="gradient"
                bgColor="info"
                coloredShadow="info"
                borderRadius="lg"
                p={1}
                mt={3}
            >
                { currentUser && <MKTypography variant="h3" color="white">
                    My most recent review
                </MKTypography> }
                { !currentUser && <MKTypography variant="h3" color="white">
                    The most recent review on the website
                </MKTypography> }
            </MKBox>
            <MKBox p={1} width="100%" component="form" method="post" autocomplete="off">
                {currentUser && reviews[reviews_count-1] &&
                <div>
                    <Link to={`/details/${reviews[reviews_count-1].booksapiID}`}>
                        {reviews[reviews_count-1].booksapiID}
                    </Link>
                </div>}
            </MKBox>
            <MKBox p={1} width="100%" component="form" method="post" autocomplete="off">
                {!currentUser && reviews[reviews_count-1] &&
                <div>
                    <Link to={`/details/${reviews[reviews_count-1].booksapiID}`}>
                        {reviews[reviews_count-1].booksapiID}
                    </Link>
                    <span>
                                        &nbsp;is reviewed by User&nbsp;
                                    </span>
                    <Link to={`/profile/${reviews[reviews_count-1].author}`}>
                        {getUsername(reviews[reviews_count-1].author)}
                    </Link>
                </div>}
            </MKBox>
            {/*            {
                currentUser &&
                <div className="card border-secondary mb-3">
                    <h3 className="card-header"> My most recent like </h3>
                    <div className="row card-body">
                        <div className="col">
                            {
                                likes[count - 1] &&
                                <div>
                                    <Link to={`/details/${likes[count - 1].book}`}>
                                        {likes[count - 1].book}
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            {
                !currentUser &&
                <div className="card border-secondary mb-3">
                    <h3 className="card-header">Most recent like</h3>
                    <div className="row card-body">
                        <div className="col">
                            {
                                likes[count - 1] &&
                                <div>
                                    <Link to={`/details/${likes[count - 1].book}`}>
                                        {likes[count - 1].book}
                                    </Link>
                                    <span>
                                        &nbsp;is liked by User&nbsp;
                                    </span>
                                    <Link to={`/profile/${likes[count - 1].user}`}>
                                        {getUsername(likes[count - 1].user)}
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }

            {
                currentUser &&
                <div className="card border-secondary mb-3">
                    <h3 className="card-header"> My most recent review</h3>
                    <div className="row card-body">
                        <div className="col">
                            {
                                reviews[reviews_count-1] &&
                                <div>
                                    <Link to={`/details/${reviews[reviews_count-1].booksapiID}`}>
                                        {reviews[reviews_count-1].booksapiID}
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            {
                !currentUser &&
                <div className="card border-secondary mb-3">
                    <h3 className="card-header">Most recent Review</h3>
                    <div className="row card-body">
                        <div className="col">
                            {
                                reviews[reviews_count-1] &&
                                <div>
                                    <Link to={`/details/${reviews[reviews_count-1].booksapiID}`}>
                                        {reviews[reviews_count-1].booksapiID}
                                    </Link>
                                    <span>
                                        &nbsp;is reviewed by User&nbsp;
                                    </span>
                                    <Link to={`/profile/${reviews[reviews_count-1].author}`}>
                                        {getUsername(reviews[reviews_count-1].author)}
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }*/}

        {/*        currentUser &&*/}
        {/*        <div className="card border-secondary mb-3">*/}
        {/*            <h3 className="card-header"> My most recent like </h3>*/}
        {/*            <div className="row card-body">*/}
        {/*                <div className="col">*/}
        {/*                    {*/}
        {/*                        likes[count - 1] &&*/}
        {/*                        <div>*/}
        {/*                            <Link to={`/details/${likes[count - 1].book}`}>*/}
        {/*                                {likes[count - 1].book}*/}
        {/*                            </Link>*/}
        {/*                        </div>*/}
        {/*                    }*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    }*/}
        {/*    {*/}
        {/*        !currentUser &&*/}
        {/*        <div className="card border-secondary mb-3">*/}
        {/*            <h3 className="card-header">Most recent like</h3>*/}
        {/*            <div className="row card-body">*/}
        {/*                <div className="col">*/}
        {/*                    {*/}
        {/*                        likes[count - 1] &&*/}
        {/*                        <div>*/}
        {/*                            <Link to={`/details/${likes[count - 1].book}`}>*/}
        {/*                                {likes[count - 1].book}*/}
        {/*                            </Link>*/}
        {/*                            <span>*/}
        {/*                                &nbsp;is liked by User&nbsp;*/}
        {/*                            </span>*/}
        {/*                            <Link to={`/profile/${likes[count - 1].user}`}>*/}
        {/*                                {getUsername(likes[count - 1].user)}*/}
        {/*                            </Link>*/}
        {/*                        </div>*/}
        {/*                    }*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    }*/}

        {/*    {*/}
        {/*        currentUser &&*/}
        {/*        <div className="card border-secondary mb-3">*/}
        {/*            <h3 className="card-header"> My most recent review</h3>*/}
        {/*            <div className="row card-body">*/}
        {/*                <div className="col">*/}
        {/*                    {*/}
        {/*                        reviews[reviews_count-1] &&*/}
        {/*                        <div>*/}
        {/*                            <Link to={`/details/${reviews[reviews_count-1].booksapiID}`}>*/}
        {/*                                {reviews[reviews_count-1].booksapiID}*/}
        {/*                            </Link>*/}
        {/*                        </div>*/}
        {/*                    }*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    }*/}
        {/*    {*/}
        {/*        !currentUser &&*/}
        {/*        <div className="card border-secondary mb-3">*/}
        {/*            <h3 className="card-header">Most recent Review</h3>*/}
        {/*            <div className="row card-body">*/}
        {/*                <div className="col">*/}
        {/*                    {*/}
        {/*                        reviews[reviews_count-1] &&*/}
        {/*                        <div>*/}
        {/*                            <Link to={`/details/${reviews[reviews_count-1].booksapiID}`}>*/}
        {/*                                {reviews[reviews_count-1].booksapiID}*/}
        {/*                            </Link>*/}
        {/*                            <span>*/}
        {/*                                &nbsp;is reviewed by User&nbsp;*/}
        {/*                            </span>*/}
        {/*                            <Link to={`/profile/${reviews[reviews_count-1].author}`}>*/}
        {/*                                {getUsername(reviews[reviews_count-1].author)}*/}
        {/*                            </Link>*/}
        {/*                        </div>*/}
        {/*                    }*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    }*/}
        </>
    )
}

export default Books;