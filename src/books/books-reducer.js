import {
    createBooksThunk,
    deleteBooksThunk,
    findAllBooksThunk,
    updateBooksThunk
} from "./books-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    books: [],
    loading: true
}

const booksReducer = createSlice ({
    name: 'books',
    initialState: initialState,
    extraReducers: {
        [findAllBooksThunk.fulfilled]: (state, action) => {
            state.books = action.payload
        },
        [createBooksThunk.fulfilled]: (state, action) => {
            state.books.push(action.payload)
        },
        [deleteBooksThunk.fulfilled]: (state, action) => {
            state.books = state.books.filter(b => {
                return b._id !== action.payload
            })
        },
        [updateBooksThunk.fulfilled]: (state, action) => {
            const bookIndex = state.books.findIndex(book => book._id === action.payload._id)
            state.books[bookIndex] = action.payload
        }
    }
})

export default booksReducer.reducer;