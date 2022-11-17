import './App.css';
import Books from "./books";
import booksReducer from "./books/books-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";


const store = configureStore( {
    reducer: {
        books: booksReducer
    }
})

function App() {
  return (
    <div>
        <Provider store = {store}>
            <Books/>
        </Provider>
    </div>
  );
}

export default App;
