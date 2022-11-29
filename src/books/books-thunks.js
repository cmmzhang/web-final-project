import {createAsyncThunk} from "@reduxjs/toolkit";
import {createBook, deleteBook, findAllBooks, updateBook} from "./books-service";

export const createBooksThunk = createAsyncThunk(
    'createBook',
    (newBook) => createBook(newBook)
)

export const findAllBooksThunk = createAsyncThunk(
    'findAllBooks',
    () => findAllBooks()
)

export const updateBooksThunk = createAsyncThunk(
    'updateBooks',
    (newBook) => updateBook(newBook)
)

export const deleteBooksThunk = createAsyncThunk(
    'deleteBooks',
    (bid) => deleteBook(bid)

)