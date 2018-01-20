import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

const API_URL = 'https://5a630c3c9e3dc40012d03263.mockapi.io/Stav/tasks';

ReactDOM.render(<App apiUrl={API_URL} />, document.getElementById('container'));
