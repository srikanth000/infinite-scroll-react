import axios from 'axios';

const request = (options) => {
  const { headers, ...restOptions } = options;
  const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      accept: 'application/json',
      ...headers
    }
  })
  return client(restOptions);
}

export default request;