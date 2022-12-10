import './App.css';
import Books from "./books";
import booksReducer from "./books/books-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import booksapiReducer from "./booksapi/booksapi-reducer";
import BooksApiSearch from "./booksapi/booksapi-search";
import likesReducer from "./likes/likes-reducer"
import CurrentUser from "./users/current-user";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./navigation";
import UserList from "./users";
import Register from "./users/register";
import Profile from "./users/profile";
import Login from "./users/login";
import usersReducer from "./users/users-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './vendor/bootstrap.min.css';
import BooksApiDetails from "./booksapi/booksapi-details";
import PublicProfile from "./users/public-profile";
import ReviewsReducer from "./reviews/reviews-reducer";
import EditProfile from "./users/edit-profile";
import followsReducer from "./follows/follows-reducer";


const store = configureStore( {
    reducer: {
        books: booksReducer,
        booksapi: booksapiReducer,
        likes:likesReducer,
        users: usersReducer,
        follows: followsReducer,
        reviews: ReviewsReducer,
    }
})

function App() {
  return (
    <div className="container mt-4 mb-4">
        <Provider store={store}>
          <CurrentUser>
            <BrowserRouter>
              <Navigation/>
              <Routes>
                <Route index element={<Books />} />
                <Route path="/search" element={<BooksApiSearch />} />
                <Route exact
                       strict
                       sensitive={false} path="/details/:booksapiID" element={<BooksApiDetails/>}/>
                <Route path="/users" element={<UserList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:uid" element={<PublicProfile/>}/>
                <Route path="/editprofile/:uid" element={<EditProfile/>}/>
              </Routes>
            </BrowserRouter>
          </CurrentUser>
        </Provider>
    </div>
  );
}

export default App;