import React, {forwardRef, useCallback} from 'react';
import {Scrollable} from 'webrix/components';
import './CustomScrollbars.scss';

const CustomVerticalScrollbar = forwardRef(({container}, ref) => {
    const handleOnUpdate = useCallback((track, thumb, container) => {
        const BORDER_SIZE = 2;
        const {scrollHeight, clientHeight, scrollTop} = container;
        const {height} = container.getBoundingClientRect();
        const trackLength = height + BORDER_SIZE * 2;
        track.style.top = `-${BORDER_SIZE}px`;
        track.style.height = `${trackLength}px`;
        thumb.style.height = `${Scrollable.getThumbLength(trackLength, clientHeight, scrollHeight)}px`;
        thumb.style.top = `${Scrollable.getThumbPosition(trackLength, clientHeight, scrollHeight, scrollTop)}px`;
    }, []);
    return (
        <Scrollable.VerticalScrollbar.Default onUpdate={handleOnUpdate} container={container} ref={ref}/>
    )
});

export default () =>  (
    <Scrollable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <Scrollable.VerticalScrollbar>
            <CustomVerticalScrollbar/>
        </Scrollable.VerticalScrollbar>
    </Scrollable>
);