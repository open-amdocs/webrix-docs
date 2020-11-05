import React, {useState} from 'react';
import {Zoomable} from 'webrix';
import {FaPlusSquare, FaMinusSquare} from 'react-icons/fa';
import './Zooming.scss';

export default () => {
    const [zoom, setZoom] = useState(2);

    return (
        <React.Fragment>
            <div className='controls'>
                <FaPlusSquare onClick={() => setZoom(zoom + 0.25)}/>
                <FaMinusSquare onClick={() => setZoom(Math.max(0, zoom - 0.25))}/>
            </div>
            <Zoomable zoom={zoom}>Scale x{zoom}</Zoomable>
        </React.Fragment>
    );
};