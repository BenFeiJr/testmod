import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React, { Error } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.newLog = {
    info: function(msg) {
        console.log('%c' + msg, 'background: green; color: #fff;')
    },
    warn: function(msg) {
        console.log('%c' + msg, 'background: blue; color: #fff;')
    }
};

ReactDOM.render(
    <RecoilRoot>
        <React.Suspense fallback={<div>loading</div>}>
            <App />
        </React.Suspense>
    </RecoilRoot>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
