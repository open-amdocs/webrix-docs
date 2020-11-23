import React, {useCallback, useContext, useState} from 'react';
import {Poppable} from 'webrix/components';
import {useVisibilityState, useClickOutside} from 'webrix/hooks';
import './MousePosition.scss';

const isEmpty = o => JSON.stringify(o) === '{}';

const Triangle = () => {
    const {tbr} = useContext(Poppable.Context);
    const SIZE = 20;
    return !isEmpty(tbr) && <div className='poppable-triangle' style={{top: tbr.top - SIZE, left: tbr.left + (tbr.width - SIZE) / 2}}/>;
};

export default () => {
    const {visible, show, hide} = useVisibilityState();
    const handleOnMouseDownCapture = useClickOutside(hide);
    const [reference, setReference] = useState(new DOMRect(0, 0, 0, 0));
    const getPlacements = useCallback((rbr, tbr) => [{
        top: rbr.bottom + 10,
        left: rbr.left + (rbr.width - tbr.width) / 2,
    }], []);
    const handleOnClick = useCallback(e => {
        show();
        setReference(new DOMRect(e.clientX, e.clientY, 0, 0));
    }, [setReference, show]);

    return (
        <>
            <div
                onClick={handleOnClick}
                onMouseDownCapture={handleOnMouseDownCapture}
                className='dashed-rectangle'
                title='Clickable Area'/>
            {visible && <Poppable reference={reference} placements={getPlacements} className='poppable-target'>
                <Triangle/>
                Target
            </Poppable>}
        </>
    );
};