import axios from 'axios';
export default axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    Authorization: 'Bearer e3259a4db0314a1fb2f60d08bfd478f5',
  },
});
