import axios from 'axios';
const KEY = 'AIzaSyBAbTF3CJTzzVZGqYkWdTP-la4mmn5xBxc';
//KEY is restricted in google dev console.
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY
  }
});
