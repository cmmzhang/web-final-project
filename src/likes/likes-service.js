import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
const LIKES_URL = 'http://localhost:4000/users/:uid/likes/:bid'

export const userLikesBook = async (uid, bid) => {
  const response = await axios.post(`${USERS_URL}/${uid}/likes/${bid}`)
  return response.data
}