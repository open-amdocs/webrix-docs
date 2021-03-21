import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './SnappingAdvanced.scss';

const {reposition, update, snap} = Movable.Operations;

// For display purposes only, this part can otherwise be ignored
const getInitialLeft = index => {
    const count = 3, size = 120, space = 40;
    return (
        (window.innerWidth - (count * size + (count - 1) * space)) / 2 + index * (size + space)
    );
}

const SnappingMovable = ({index, horizontal, vertical, strength = 1}) => {
    const [position, setPosition] = useState({left: getInitialLeft(index)});
    const ref = useRef();
    const props = Movable.useMove(useMemo(() => [
        reposition(ref),
        snap(horizontal, vertical, strength),
        update(setPosition),
    ], [horizontal, vertical, strength]));

    return (
        <Movable {...props} ref={ref} style={position}>
            Grid: {horizontal}x{vertical}<br/>
            Strength: {strength}
        </Movable>
    );
};

export default () => (
    <>
        <SnappingMovable horizontal={30} vertical={30} index={0}/>
        <SnappingMovable horizontal={60} vertical={1} index={1}/>
        <SnappingMovable horizontal={60} vertical={60} strength={0.3} index={2}/>
    </>
);