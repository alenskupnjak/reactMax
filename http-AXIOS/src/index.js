import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL='https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Autorization'] = 'AUTH TOKEN'

//  Za REQUEST
axios.interceptors.request.use(
  (req) => {
    console.log('interceptors.request', req);
    return req;
  },
  (err) => {
    console.log(err);
  }
);

//  Za RESPONSE
axios.interceptors.response.use(
  (res) => {
    console.log('interceptors.request', res);
    return res;
  },
  (err) => {
    console.log(err);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
