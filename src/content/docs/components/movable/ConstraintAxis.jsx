import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './ConstraintAxis.scss';

const {move, update} = Movable.Operations;

export default () => {
    const [top, setTop] = useState();
    const ref = useRef();
    const props = Movable.useMove([
        move(ref),
        update(({top}) => setTop(top)),
    ]);

    return (
        <Movable {...props} ref={ref} style={{top}}>
            I Move Vertically
        </Movable>
    );
};