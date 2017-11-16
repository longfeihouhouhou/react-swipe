import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let Image=[
    require('./image/1.jpg'),
    require('./image/2.jpg'),
    require('./image/3.jpg'),
    require('./image/4.jpg')
]
ReactDOM.render(<App Image={Image} />, document.getElementById('root'));

