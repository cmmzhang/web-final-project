import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
const BOOKS_URL = 'http://localhost:4000/books'
const ALL_LIKES_URL = 'http://localhost:4000/likes'

/*const api = axios.create({withCredentials:true});*/

export const userLikesBook = async (uid, bid) => {
  const response = await axios.post(`${USERS_URL}/${uid}/likes/${bid}`)
  return response.data
}

export const userUnlikesBook = async (uid, bid) => {
  const response = await axios.delete(`${USERS_URL}/${uid}/likes/${bid}`)
  return response.data
}

export const findAllLikes = async () => {
  const response = await axios.get(ALL_LIKES_URL)
  return response.data
}

export const findBooksLikedByUser = async (uid) => {
  const response = await axios.get(`${USERS_URL}/${uid}/likes`)
  return response.data
}

export const findUsersWhoLikedBook = async (bid) => {
  const response = await axios.get(`${BOOKS_URL}/${bid}/likes`)
  return response.data
}
