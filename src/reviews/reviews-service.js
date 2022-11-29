import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
const BOOKS_URL = 'http://localhost:4000/books'
const ALL_REVIEWS_URL = 'http://localhost:4000/reviews'

export const userReviewsBook = async (uid, bid) => {
    const response = await axios.post(`${USERS_URL}/${uid}/reviews/${bid}`)
    return response.data
}

export const findAllReviews = async () => {
    const response = await axios.get(ALL_REVIEWS_URL)
    return response.data
}

export const findBooksReviewedByUser = async (uid) => {
    const response = await axios.get(`${USERS_URL}/${uid}/reviews`)
    return response.data
}

export const findUsersWhoReviewedBook = async (bid) => {
    const response = await axios.get(`${BOOKS_URL}/${bid}/reviews`)
    return response.data
}