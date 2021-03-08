import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Autorization'] = 'AUTH TOKEN FROM INSTANCE';


//  Za REQUEST INSTANCE
instance.interceptors.request.use(
  (req) => {
    console.log('interceptors.REQ', req);
    return req;
  },
  (err) => {
    console.log(err);
  }
);

//  Za RESPONSE INSTANCE
instance.interceptors.response.use(
  (res) => {
    console.log('interceptors.RES', res);
    return res;
  },
  (err) => {
    console.log(err);
  }
);

export default instance;
