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
    () => updateBook()
)

export const deleteBooksThunk = createAsyncThunk(
    'deleteBooks',
    () => deleteBook()

)