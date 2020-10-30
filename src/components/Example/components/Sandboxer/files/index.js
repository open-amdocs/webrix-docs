import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';
import 'webrix/build/main.css';
import './style.scss';

ReactDOM.render(
    <React.StrictMode>
        <div id='example'>
            <Example />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);