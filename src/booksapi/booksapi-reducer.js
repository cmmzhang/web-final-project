import {findBookByBooksApiIdThunk, findBookBySearchTermThunk} from "./booksapi-thunks";
import {createSlice} from "@reduxjs/toolkit";
import {findBookByBooksApiId} from "./booksapi-service";

const initialState = {
    books: [],
    loading: false,
    details: {}
}

const booksapiReducer = createSlice ({
    name: 'booksapi',
    initialState,
    extraReducers: {
        [findBookBySearchTermThunk.fulfilled]: (state, action) => {
            state.books = action.payload
        },
        [findBookByBooksApiIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        }
    }
})

export default booksapiReducer.reducer