import * as axios from 'axios';

export const searcherApi = axios.create({
  baseURL:
    process.env.SEARCHER_URL || 'https://dudley-backbacon-81990.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default searcherApi;
