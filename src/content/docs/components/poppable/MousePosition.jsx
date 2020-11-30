import React, {useCallback, useState} from 'react';
import {Poppable} from 'webrix/components';
import {useVisibilityState, useClickOutside} from 'webrix/hooks';
import './MousePosition.scss';

const TRIANGLE_SIZE = 10;

export default () => {
    const {visible, show, hide} = useVisibilityState();
    const handleOnMouseDownCapture = useClickOutside(hide);
    const [reference, setReference] = useState(new DOMRect(0, 0, 0, 0));
    const {vbefore, vafter, hcenter} = Poppable.Placements;
    const getPlacements = useCallback((rbr, tbr) => [
        {...vbefore(rbr, tbr, -TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Top center
        {...vafter(rbr, tbr, TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Bottom center
    ], []);
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