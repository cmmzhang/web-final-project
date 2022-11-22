import {createAsyncThunk} from "@reduxjs/toolkit";
import {findBookBySearchTerm} from "./booksapi-service";

export const findBookBySearchTermThunk = createAsyncThunk (
    'findBookBySearchTerm',
    (term) => findBookBySearchTerm(term)
)