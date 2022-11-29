import './App.css';
import Books from "./books";
import booksReducer from "./books/books-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import booksapiReducer from "./booksapi/booksapi-reducer";
import BooksApiSearch from "./booksapi/booksapi-search";
import {likesReducer} from "./likes/likes-reducer";
import {ReviewsReducer} from "./reviews/reviews-reducer";

const store = configureStore( {
    reducer: {
        books: booksReducer,
        booksapi: booksapiReducer,
        likes:likesReducer,
        reviews:ReviewsReducer,
    }
})

function App() {
  return (
    <div>
        <Provider store = {store}>
            <BooksApiSearch/>
            <Books/>
            {/*<ReviewsReducer/>*/}
        </Provider>
    </div>
  );
}

export default App;
