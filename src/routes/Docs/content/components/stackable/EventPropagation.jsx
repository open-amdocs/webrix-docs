import React, {useState, useCallback} from 'react';
import {Stackable} from 'webrix';
import './style.scss';

const Layer = ({children}) => {
    const [clicks, setClicks] = useState(0);
    const handleOnClick = useCallback(() => {
        setClicks(clicks => clicks + 1);
    }, [setClicks]);

    return (
        <Stackable className='descendants' onClick={handleOnClick}>
            Clicks: {clicks}
            {children}
        </Stackable>
    );
};

export default () => (
    <Layer>
        <Layer>
            <Layer/>
        </Layer>
    </Layer>
);