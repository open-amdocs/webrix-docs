import React, {useState} from 'react';
import {Zoomable} from 'webrix';
import {FaPlusSquare, FaMinusSquare} from 'react-icons/fa';
import './style.scss';

export default () => {
    const [zoom, setZoom] = useState(1);

    return (
        <div className='zooming'>
            <div className='controls'>
                <FaPlusSquare onClick={() => setZoom(zoom + 0.25)}/>
                <FaMinusSquare onClick={() => setZoom(Math.max(0, zoom - 0.25))}/>
            </div>
            <Zoomable zoom={zoom}>Scale x{zoom}</Zoomable>
        </div>
    );
};