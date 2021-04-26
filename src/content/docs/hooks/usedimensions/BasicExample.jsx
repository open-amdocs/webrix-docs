import React, {useRef} from 'react';
import {useDimensions} from 'webrix/hooks';
import './BasicExample.scss';

const getSize = height => Object.entries({
    s: height < 40,
    m: height >= 40 && height < 80,
    l: height >= 80 && height < 130,
    xl: height >= 130 && height < 170,
}).reduce((acc, [cls, inRange]) => inRange ? cls : acc, '');

export default () => {
    const myRef = useRef();
    const {width, height} = useDimensions(myRef);
    const size = getSize(height);
    return (
        <div ref={myRef} className={`container ${size}`}>
            {height} x {width}
        </div>
    );
};
