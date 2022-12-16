import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findBookBySearchTerm } from "./booksapi-service";
import { findBookBySearchTermThunk } from "./booksapi-thunks";
import { userLikesBookThunk } from "../likes/likes-thunks";
import { Link } from "react-router-dom";
import MKBox from "../components/MKBox";
import bgImage from "../assets/images/bg-sign-in-basic.jpeg";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKTypography from "../components/MKTypography";
import MKInput from "../components/MKInput";
import MKButton from "../components/MKButton";
import Stack from "@mui/material/Stack";


const BooksApiSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { books, loading } = useSelector((state) => state.booksapi)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookBySearchTermThunk(searchTerm))
    }, [])
    const bgImage = "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    return (
        <>
            <MKBox
                position="absolute"
                top={100}
                left={0}
                zIndex={1}
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
                    <Grid item xs={7} sm={8} md={9} lg={10} xl={11}>
                        {/* <Stack direction="row" spacing={1} mt={3}> */}
                        <MKBox
                            variant="gradient"
                            bgColor="light"
                            borderRadius="lg"
                            coloredShadow="info"
                            mx={2}
                            mt={-3}
                            p={2}
                            mb={1}
                            textAlign="center"
                        >

                            <MKInput label="Please search your favoriate book"
                                     size="large"
                                //    STYLE='color：#f70a1a'
                                     fullWidth
                                     value={searchTerm}
                                     onChange={(e) => setSearchTerm(e.target.value)} />
                            <MKBox mt={4} mb={1}>
                                <MKButton variant="gradient" color="info" mt={3} p={5}
                                          onClick={() => { dispatch(findBookBySearchTermThunk(searchTerm)) }}
                                >
                                    Search
                                </MKButton>
                            </MKBox>



                            {/* </Stack> */}
                            <ul className="list-unstyled">
                                {
                                    books.map((book) =>
                                        <li className="text-white" key={book.booksapiID}>
                                            <Link to={`/details/${book.book_title}`}>
                                                {book.book_title}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </MKBox>
                    </Grid>
                </Grid>
            </MKBox>
        </>


        // <>
        //   <h1>The New York Times Best Sellers</h1>
        //   <input
        //       onChange={(e) => {
        //         setSearchTerm(e.target.value)
        //       }}
        //       value={searchTerm}/>
        //   <button onClick={() => {
        //     dispatch(findBookBySearchTermThunk(searchTerm))
        //   }}>Search</button>
        //   <ul>
        //     {
        //       books.map((book) =>
        //           <li key={book.booksapiID}>
        //             <Link to={`/details/${book.book_title}`}>
        //               {book.book_title}
        //             </Link>
        //
        //
        //           </li>
        //       )
        //     }
        //   </ul>
        // </>
    )
}

export default BooksApiSearch