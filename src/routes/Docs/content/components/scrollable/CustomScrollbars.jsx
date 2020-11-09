import React, {forwardRef, useCallback} from 'react';
import {Scrollable} from 'webrix';
import VerticalScrollbar from './components/VerticalScrollbar/VerticalScrollbar';
import {getThumbPosition, getThumbSize} from './components/VerticalScrollbar/Scrollable.utils';
import './CustomScrollbars.scss';

const CustomVerticalScrollbar = forwardRef(({container}, ref) => {
    const handleOnUpdate = useCallback((track, thumb, container) => {
        const {scrollHeight, scrollTop} = container;
        const {height} = container.getBoundingClientRect();
        track.style.top = '-6px';
        track.style.height = `${height + 6}px`;
        track.style.right = `${-track.clientWidth - 2}px`;
        thumb.style.height = `${getThumbSize(height + 6, scrollHeight + 6)}px`;
        thumb.style.top = `${getThumbPosition(height + 6, scrollHeight + 6, scrollTop)}px`;
    }, []);
    return (
        <VerticalScrollbar  onUpdate={handleOnUpdate} container={container} ref={ref}/>
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