import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './resources/styles/root.scss';

ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(<App/>, document.getElementById('app'));
    });
}