import {createAsyncThunk} from "@reduxjs/toolkit";
import {findBookByBooksApiId, findBookBySearchTerm} from "./booksapi-service";

export const findBookBySearchTermThunk = createAsyncThunk (
    'findBookBySearchTerm',
    (term) => findBookBySearchTerm(term)
)

export const findBookByBooksApiIdThunk = createAsyncThunk (
    'findBookByBooksApiId',
    (booksapiID) => findBookByBooksApiId(booksapiID)
)