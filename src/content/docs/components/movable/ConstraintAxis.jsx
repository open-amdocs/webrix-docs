import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './ConstraintAxis.scss';

export default () => {
    const [top, setTop] = useState();
    const ref = useRef();
    const {reposition, update} = Movable.Constraints;
    const props = Movable.useMove(useMemo(() => [
        reposition(ref),
        update(({top}) => setTop(top)),
    ], []));

    return (
        <Movable {...props} ref={ref} style={{top}}>
            I Move Vertically
        </Movable>
    );
};