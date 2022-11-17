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

export const updateBook = async () => {}

export const deleteBook = async () => {}