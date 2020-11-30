import React, {useCallback, useContext, useState} from 'react';
import {Poppable} from 'webrix/components';
import {useVisibilityState, useClickOutside} from 'webrix/hooks';
import './MousePosition.scss';

const TRIANGLE_SIZE = 10;

export default () => {
    const {visible, show, hide} = useVisibilityState();
    const handleOnMouseDownCapture = useClickOutside(hide);
    const [reference, setReference] = useState(new DOMRect(0, 0, 0, 0));
    const getPlacements = useCallback((rbr, tbr) => [{
        top: rbr.bottom + TRIANGLE_SIZE,
        left: rbr.left + (rbr.width - tbr.width) / 2,
    }, {
        top: rbr.top - tbr.height - TRIANGLE_SIZE,
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
            {visible && (
                <Poppable reference={reference} placements={getPlacements} className='poppable-target'>
                    <Poppable.Triangle size={TRIANGLE_SIZE}/>
                    Target
                </Poppable>
            )}
        </>
    );
};