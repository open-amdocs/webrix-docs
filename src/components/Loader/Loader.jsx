import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../Logo/Logo';
import './Loader.scss';

export const Loader = () => (
    <div id='webrix-loader'>
        <Logo.Icon/>
    </div>
);

export default () => ReactDOM.createPortal(<Loader/>, document.body);