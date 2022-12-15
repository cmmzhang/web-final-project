import React from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {findBookByBooksApiIdThunk} from "./booksapi-thunks";


import {createReviewThunk, findReviewsByBookThunk, deleteReviewThunk} from "../reviews/reviews-thunks";

import {
  findAllLikesThunk,
  findUsersWhoLikedBookThunk,
  userLikesBookThunk,
  userUnlikesBookThunk
} from "../likes/likes-thunks";

import {Link} from "react-router-dom";
import "./index.css";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../components/MKBox";
import MKInput from "../components/MKInput";
import MKButton from "../components/MKButton";
import MKTypography from "../components/MKTypography";

// Images
import bgImage from "../assets/images/examples/blog2.jpg";

const BooksApiDetails = () => {
  const {booksapiID} = useParams()
  const {details} = useSelector((state) => state.booksapi)
  const {currentUser} = useSelector((state) => state.users)
  const {likes} = useSelector((state) => state.likes)
  
  const {reviews} = useSelector((state) => state.reviews)
  // const [rerender, setRerender] = useState(true);
  const [review, setReview] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(findBookByBooksApiIdThunk(booksapiID))
      dispatch(findUsersWhoLikedBookThunk(booksapiID))
      dispatch(findReviewsByBookThunk(booksapiID))
  }, [])

  const likeBook = () => {
    if (likes.filter((like) => like.user._id === currentUser._id).length === 0) {
      dispatch(userLikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
      dispatch(findUsersWhoLikedBookThunk(booksapiID))
    } else {
      alert('You have already liked this book');
    }
  }

  const UnlikeBook = () => {
    if (likes.filter((like) => like.user._id === currentUser._id).length !== 0) {
      dispatch(userUnlikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
      dispatch(findUsersWhoLikedBookThunk(booksapiID))
    } else {
      alert('You have not liked this book yet');
    }
  }

  const alertLogin = () => {
    alert('Warning: Please log in first');
  }

  const handlePostReviewBtn = () => {
    dispatch(createReviewThunk({
      review,
      booksapiID
    }))
    // dispatch(findReviewsByBookThunk(booksapiID))
  }



  const reviewsLimit = 5;
  // const currentReview = reviews.filter((review) => review?.author?._id === currentUser?._id)
  const currentReview = reviews.filter((review) => review.author._id === currentUser._id)
  console.log("currentReview: ", currentReview)
  let postIsDisabled = true;
  if(currentReview.length >= reviewsLimit) {
    postIsDisabled =  true
  } else {
    postIsDisabled = false
  }

  console.log("postIsDisabled: ", postIsDisabled)

  return (
      <>
      <MKBox component="section" py={{ xs: 0, lg: 6 }}>
        <Container>
          <Grid container item>
            <MKBox
                width="100%"
                bgColor="white"
                borderRadius="xl"
                shadow="xl"
                mb={6}
                sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    lg={5}
                    position="relative"
                    px={0}
                    sx={{
                      backgroundImage: ({
                                          palette: { gradients },
                                          functions: { rgba, linearGradient },
                                        }) =>
                          `${linearGradient(
                              rgba(gradients.dark.main, 0.8),
                              rgba(gradients.dark.state, 0.8)
                          )}, url(${bgImage})`,
                      backgroundSize: "cover",
                    }}
                >
                  <MKBox
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      height="100%"
                  >
                    <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                      <MKTypography variant="h3" color="white" mb={1}>
                        {
                          details[0] &&
                            details[0].book_title
                        }
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        {
                          details[0] &&
                          <div>Book Author: {details[0].book_author}</div>
                        }
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        {
                          details[0] &&
                          <div>Book Summary: {details[0].summary}</div>
                        }
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        {
                          details[0] &&
                          <div>Publication Date: {details[0].publication_dt}</div>
                        }
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        {
                          details[0] &&
                          <div>ISBN: {details[0].isbn13[0]}</div>
                        }
                      </MKTypography>


                      <MKBox mt={3}>
                        <MKButton variant="text" color="white" size="large">
                          {
                            !currentUser &&
                            <i onClick={() => {alertLogin()}} className="bi bi-hand-thumbs-up wd-enlarge me-2"></i>
                          }
                            {
                                currentUser && currentUser.type !== 'ADMIN' &&
                                <i onClick={() => {likeBook()}} className="bi bi-hand-thumbs-up wd-enlarge me-2"></i>
                            }
                        </MKButton>
                        <MKButton variant="text" color="white" size="large">
                          {
                            !currentUser &&
                            <i onClick={() => {alertLogin()}} className="bi bi-hand-thumbs-down wd-enlarge me-2"></i>
                          }
                          {
                            currentUser && currentUser.type !== 'ADMIN' &&
                            <i onClick={() => {UnlikeBook()}} className="float-end bi bi-hand-thumbs-down wd-enlarge me-2"></i>
                          }
                        </MKButton>
                      </MKBox>
                    </MKBox>
                  </MKBox>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <MKBox p={2}>
                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                      <MKTypography variant="h2" mb={1}>
                        Welcome!
                      </MKTypography>
                      <MKTypography variant="body1" color="text" mb={2}>
                        A word after a word after a word is power.
                      </MKTypography>
                    </MKBox>
                    <MKBox pt={0.5} pb={3} px={3}>
                      <Grid container>
                        <Grid item xs={12} pr={1} mb={6}>
                          <h2 className="card-header">People who like this book</h2>
                          <ul className="list-group">
                            {
                              likes && likes.map((like) =>
                                  <>
                                    { like.user &&
                                    <li className="list-group-item" key={like._id}>
                                      <Link to={`/profile/${like.user._id}`}>
                                        {like.user.username}
                                      </Link>
                                    </li>
                                    }
                                  </>
                              )
                            }
                          </ul>
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                            <h2 className="card-header">Related book reviews</h2>
                            <ul className="list-group">
                                {
                                    reviews.map((review, index) =>
                                        <>
                                            {review.author.username &&
                                            <li className="list-group-item" key={index}>
                                                {review.review}
                                                <div> <span>review left by  </span>
                                                    <Link to={`/profile/${review?.author?._id}`}>
                                                        {review.author.username}
                                                    </Link>
                                                    <button className="float-end" disabled={currentUser?._id!==review?.author?._id} onClick={() => {
                                                        console.log("button clicked")
                                                        dispatch(deleteReviewThunk({review}))}
                                                    }>delete Review</button>
                                                </div>
                                            </li>}
                                        </>
                                    )
                                }
                            </ul>
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <h2 className="card-header">Post a new review</h2>
                          {
                            !currentUser &&
                            <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                              <MKButton onClick={() => {alertLogin()}} variant="gradient" color="info">
                                Post Review
                              </MKButton>
                            </div>
                          }
                          {
                            currentUser && currentUser.type === 'PROFESSIONAL' &&
                            <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                              {/* <span>postIsDisabled:  {postIsDisabled} </span> */}
                              {/* <button disabled={postIsDisabled}onClick={handlePostReviewBtn}>Post Review</button> */}
                              {/*<button onClick={handlePostReviewBtn}>Send Message</button>*/}
                              <MKButton onClick={handlePostReviewBtn} variant="gradient" color="info">
                                Post Review
                              </MKButton>
                            </div>
                          }
                          {
                            currentUser && currentUser.type === 'STUDENT' &&
                            <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                              {/* <span>postIsDisabled:  {postIsDisabled} </span> */}
                              {/*<button disabled={postIsDisabled} onClick={handlePostReviewBtn}>Post Review</button>*/}
                              <MKButton disabled={postIsDisabled} onClick={handlePostReviewBtn} variant="gradient" color="info">
                                Post Review
                              </MKButton>
                              {/* <button onClick={handlePostReviewBtn}>Post Review</button> */}
                            </div>
                          }
                        </Grid>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      </>


      // <>
      //   <h1>{booksapiID}</h1>
      //   {currentUser && <h2>{currentUser.username}</h2>}
      //   <div className="row">
      //     <div className="col">
      //       {
      //         details[0] && <ul className="list-group">
      //           <li>Book Title: {details[0].book_title}</li>
      //           <li>Book Author: {details[0].book_author}</li>
      //           <li>Book Summary: {details[0].summary}</li>
      //           <li>Publication Date: {details[0].publication_dt}</li>
      //           <li>ISBN: {details[0].isbn13[0]}</li>
      //         </ul>
      //       }
      //     </div>
      //   </div>
      //
      //   <div className="pb-5">
      //     {
      //       !currentUser &&
      //       <i onClick={() => {alertLogin()}} className="float-end bi bi-hand-thumbs-down wd-enlarge me-2"></i>
      //     }
      //     {
      //       !currentUser &&
      //       <i onClick={() => {alertLogin()}} className="float-end bi bi-hand-thumbs-up wd-enlarge me-2"></i>
      //     }
      //     {
      //       currentUser && currentUser.type !== 'ADMIN' &&
      //       <i onClick={() => {UnlikeBook()}} className="float-end bi bi-hand-thumbs-down wd-enlarge me-2"></i>
      //       /*            <i onClick={() => {
      //                     dispatch(userUnlikesBookThunk({ uid: currentUser._id, bid: booksapiID}))
      //                   }} className="float-end bi bi-hand-thumbs-down me-2">
      //                   </i>*/
      //     }
      //     {
      //       currentUser && currentUser.type !== 'ADMIN' &&
      //       <i onClick={() => {likeBook()}} className="float-end bi bi-hand-thumbs-up wd-enlarge me-2"></i>
      //     }
      //   </div>
      //   <div className="card border-secondary mb-3">
      //     <h2 className="card-header">People who like this book</h2>
      //     <ul className="list-group">
      //       {
      //         likes && likes.map((like) =>
      //             <>
      //               { like.user &&
      //               <li className="list-group-item" key={like._id}>
      //                 <Link to={`/profile/${like.user._id}`}>
      //                   {like.user.username}
      //                 </Link>
      //               </li>
      //               }
      //             </>
      //         )
      //       }
      //     </ul>
      //   </div>
      //
      //   <div>
      //     <div className="card border-secondary mb-3">
      //     <h2 className="card-header">Related book reviews</h2>
      //       <ul className="list-group">
      //           {
      //               reviews.map((review, index) => 
      //               <> 
      //               {review.author.username && 
      //                   <li className="list-group-item" key={index}>
      //                       {review.review}
      //                       <div> <span>review leaved by  </span>
      //                       <Link to={`/profile/${review?.author?._id}`}>
      //                           {review.author.username}
      //                       </Link>
      //                       <button className="float-end" disabled={currentUser?._id!==review?.author?._id} onClick={() => {
      //                           console.log("button clicked")
      //                           dispatch(deleteReviewThunk({review}))}
      //                         }>delete Review</button>
      //                         </div>
      //                   </li>}
      //                   </>
      //               )
      //           }
      //         </ul>
      //       </div>
      //       <div className="card border-secondary mb-3">
      //       <h2 className="card-header">Post a new review</h2>
      //         {
      //         !currentUser &&
      //         <div>
      //               <textarea
      //                   onChange={(e) => setReview(e.target.value)}
      //                   className="form-control"></textarea>
      //         <button onClick={() => {alertLogin()}}>Post Review</button>
      //         </div>
      //         }
      //         {
      //           currentUser && currentUser.type === 'PROFESSIONAL' &&
      //           <div>
      //               <textarea
      //                   onChange={(e) => setReview(e.target.value)}
      //                   className="form-control"></textarea>
      //                   {/* <span>postIsDisabled:  {postIsDisabled} </span> */}
      //               {/* <button disabled={postIsDisabled}onClick={handlePostReviewBtn}>Post Review</button> */}
      //               <button onClick={handlePostReviewBtn}>Post Review</button>
      //           </div>
      //         }
      //         {
      //           currentUser && currentUser.type === 'STUDENT' &&
      //           <div>
      //               <textarea
      //                   onChange={(e) => setReview(e.target.value)}
      //                   className="form-control"></textarea>
      //                   {/* <span>postIsDisabled:  {postIsDisabled} </span> */}
      //               <button disabled={postIsDisabled} onClick={handlePostReviewBtn}>Post Review</button>
      //               {/* <button onClick={handlePostReviewBtn}>Post Review</button> */}
      //           </div>
      //         }
      //       </div>
      //   </div>
      // </>
  )
}

export default BooksApiDetails