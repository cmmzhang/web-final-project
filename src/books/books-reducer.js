import {createBooksThunk, findAllBooksThunk} from "./books-thunks";
import {createSlice} from "@reduxjs/toolkit";

const booksReducer = createSlice ({
    name: 'books',
    initialState: [],
    extraReducers: {
        [findAllBooksThunk.fulfilled]: (state, action) => {
            return state = action.payload
        },
        [createBooksThunk().fulfilled]: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default booksReducer.reducer;