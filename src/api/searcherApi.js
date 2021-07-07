import * as axios from 'axios';

export const searcherApi = axios.create({
  baseURL: process.env.SEARCHER_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default searcherApi;
