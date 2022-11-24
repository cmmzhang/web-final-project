import {findBookBySearchTermThunk} from "./booksapi-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    books: [],
    loading: false
}

const booksapiReducer = createSlice ({
    name: 'booksapi',
    initialState,
    extraReducers: {
        [findBookBySearchTermThunk.fulfilled]: (state, action) => {
            state.books = action.payload
        }
    }
})

export default booksapiReducer.reducer