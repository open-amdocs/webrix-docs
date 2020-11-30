import React, {useCallback, useRef, useState, forwardRef, useContext} from 'react';
import {FaThumbtack} from 'react-icons/fa';
import {Movable, Poppable} from 'webrix/components';
import './ManualControl.scss';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const MovableRectangle = forwardRef(({width, height, title}, ref) => {
    const {innerWidth, innerHeight} = window;
    const [{top, left}, setPosition] = useState({top: 50, left: (innerWidth - width) / 2});

    const handleOnMove = useCallback(({cx, cy}) => {
        setPosition(({top, left}) => ({
            top: clamp(top + cy, 0, innerHeight - height),
            left: clamp(left + cx, 0 , innerWidth - width),
        }));
    }, [setPosition]);

    return (
        <Movable
            className='movable-rectangle'
            title={title}
            style={{top, left, width, height}}
            onBeginMove={handleOnMove}
            onMove={handleOnMove}
            ref={ref}/>
    );
});

export default () => {
    const [placement, setPlacement] = useState();
    const [manual, setManual] = useState(null);
    const {vafter, hcenter} = Poppable.Placements;
    const initial = useRef(manual);
    const reference = useRef();
    const handleOnBeginMove = () => {
        initial.current = {...(manual ? manual : {...placement})};
    };
    const handleOnMove = ({dx, dy}) => {
        const {top, left} = initial.current;
        setManual({top: top + dy, left: left + dx});
    };
    const getPlacements = useCallback((rbr, tbr) => [
        {...vafter(rbr, tbr, 10), ...hcenter(rbr, tbr)}, // Bottom center
    ], []);

    return (
        <>
            <MovableRectangle title='Reference' height={100} width={100} ref={reference}/>
            <Poppable.Manual reference={reference} placements={getPlacements} className='poppable-target' placement={manual || placement} onPlacement={setPlacement}>
                <Movable className='movable' onBeginMove={handleOnBeginMove} onMove={handleOnMove}>
                    TARGET
                    <FaThumbtack onClick={() => setManual(null)} className={manual ? 'unpinned' : ''}/>
                </Movable>
                {!manual && <Poppable.Triangle size={10}/>}
            </Poppable.Manual>
        </>
    );
};