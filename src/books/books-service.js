import axios from 'axios';

const BOOK_API_URL = 'http://localhost:4000/books'

export const createBook = async (newBook) => {
    const response = await axios.post(BOOK_API_URL, newBook)
    const actualBook = response.data
    return actualBook
}

export const findAllBooks = async () => {
    const response = await axios.get(BOOK_API_URL)
    const books = response.data
    return books
}

export const updateBook = async (newBook) => {
    const response = await axios.put(`${BOOK_API_URL}/${newBook._id}`, newBook)
    return response.data
}

export const deleteBook = async (bid) => {
    const response = await axios.delete(`${BOOK_API_URL}/${bid}`)
    const status = response.data
    return bid
}