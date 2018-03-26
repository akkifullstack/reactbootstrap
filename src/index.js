import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Approuter from './router/approuter'

ReactDOM.render(<Approuter />, document.getElementById('root'));
registerServiceWorker();
