import axios from "axios";

const REVIEW_API = 'http://localhost:4000/reviews'
const BOOK_REVIEWS_API = 'http://localhost:4000/books'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/users'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    return response.data
}

export const findReviewsByBook = async (booksapiID) => {
    const response = await api.get(`${BOOK_REVIEWS_API}/${booksapiID}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}