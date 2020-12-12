import React, {useState} from 'react';
import {Scalable} from 'webrix/components';
import {FaPlusSquare, FaMinusSquare} from 'react-icons/fa';
import './Scaling.scss';

export default () => {
    const [scale, setScale] = useState(2);

    return (
        <React.Fragment>
            <div className='controls'>
                <FaPlusSquare onClick={() => setScale(scale + 0.25)}/>
                <FaMinusSquare onClick={() => setScale(Math.max(0, scale - 0.25))}/>
            </div>
            <Scalable scalex={scale} scaley={scale}>
                <div className='content'>
                    Scale x{scale}
                </div>
            </Scalable>
        </React.Fragment>
    );
};