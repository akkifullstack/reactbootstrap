import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Approuter from './router/approuter'
import configureStore from './store/store'

const store = configureStore();
const state = store.getState();

const Approute = (
    <Provider store={store}>
    <Approuter />
    </Provider>
)



ReactDOM.render(Approute, document.getElementById('root'));
registerServiceWorker();
