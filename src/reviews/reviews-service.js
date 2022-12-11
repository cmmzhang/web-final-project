import axios from "axios";

const REVIEW_API = 'http://localhost:4000/reviews'
const All_REVIEW_API = 'http://localhost:4000/allreviews'
const BOOK_REVIEWS_API = 'http://localhost:4000/books'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/users'
const DELETE_REVIEW_API = 'http://localhost:4000/review'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    console.log("createReview response", response.data)
    return response.data
}

export const findReviewsByBook = async (booksapiID) => {
    console.log("findReviewsByBook booksapiID",booksapiID)
    const response = await api.get(`${BOOK_REVIEWS_API}/${booksapiID}/reviews`)
    console.log("findReviewsByBook response",response)
    if(response.data === "") return []
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}

export const findAllReviews = async () => {
    const response = await api.get(All_REVIEW_API)
    console.log("findAllReviews", response)
    return response.data
}
export const deleteReview = async(review_id, author) => {
    console.log("delete review service")
    const response = await api.delete(`${DELETE_REVIEW_API}/${review_id}/author/${author}`)
    return {
        response: response.data, 
        _id: review_id
    }
}