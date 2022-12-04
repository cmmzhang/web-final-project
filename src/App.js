import './App.css';
import Books from "./books";
import booksReducer from "./books/books-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import booksapiReducer from "./booksapi/booksapi-reducer";
import BooksApiSearch from "./booksapi/booksapi-search";
import {likesReducer} from "./likes/likes-reducer";
import CurrentUser from "./users/current-user";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./navigation";
import UserList from "./users";
import Register from "./users/register";
import Profile from "./users/profile";
import Login from "./users/login";
import usersReducer from "./users/users-reducer";
import followsReducer from "./follows/followers-reducer";

const store = configureStore( {
    reducer: {
        books: booksReducer,
        booksapi: booksapiReducer,
        likes:likesReducer,
        users: usersReducer,
        follows: followsReducer
    }
})

function App() {
  return (
    <div className="container mt-4 mb-4">
        <Provider store={store}>
          <CurrentUser>
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route index element={<Books />} />
                <Route path="/search" element={<BooksApiSearch />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={
                    <Profile />} />
              </Routes>
            </BrowserRouter>
          </CurrentUser>
        </Provider>
    </div>
  );
}

export default App;