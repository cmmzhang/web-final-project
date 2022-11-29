import './App.css';
import Books from "./books";
import booksReducer from "./books/books-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import booksapiReducer from "./booksapi/booksapi-reducer";
import BooksApiSearch from "./booksapi/booksapi-search";
import { likesReducer } from "./likes/likes-reducer";
import usersReducer from "./users/users-reducer";
import UserList from "./users";
import Register from "./users/register";
import Login from "./users/login";
import Profile from "./users/profile";
import Navigation from "./navigation";
import CurrentUser from "./users/current-user";


const store = configureStore({
  reducer: {
    books: booksReducer,
    booksapi: booksapiReducer,
    likes: likesReducer,
    users: usersReducer
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
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </BrowserRouter>
          </CurrentUser>
        </Provider>
    </div>

  );
}

export default App;
