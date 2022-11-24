import './App.css';
import Books from "./books";
import booksReducer from "./books/books-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import booksapiReducer from "./booksapi/booksapi-reducer";
import BooksApiSearch from "./booksapi/booksapi-search";


const store = configureStore( {
    reducer: {
        books: booksReducer,
        booksapi: booksapiReducer
    }
})

function App() {
  return (
    <div>
        <Provider store = {store}>
            <BooksApiSearch/>
            <Books/>
        </Provider>
    </div>
  );
}

export default App;
