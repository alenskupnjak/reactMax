import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Title naslov to"/>, document.getElementById('root'));
registerServiceWorker();
