import React, {useMemo, useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './BasicExample.scss';

export default () => {
    const ref = useRef();
    const [position, setPosition] = useState({});
    const {reposition, update} = Movable.Constraints;
    const props = Movable.useMove(useMemo(() => [
        reposition(ref),
        update(setPosition),
    ], []));

    return (
        <Movable {...props} ref={ref} style={position}>
            Move Me!
        </Movable>
    );
}