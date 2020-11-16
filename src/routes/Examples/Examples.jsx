import React from 'react';
import {useLocation} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './Examples.scss';

const Examples = () => {
    const {pathname} = useLocation();
    return (
        <>
            <Sidebar/>
            <iframe src={`/frame/examples/${pathname.split('/')[2] || 'ColorPicker'}/index`}/>
        </>
    );
}

export default Examples;