import {createBooksThunk, deleteBooksThunk, findAllBooksThunk} from "./books-thunks";
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
        }
    }
})

export default booksReducer.reducer;