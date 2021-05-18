import React, {forwardRef, useCallback} from 'react';
import {Scrollable} from 'webrix/components';
import {FaChevronUp, FaChevronDown, FaCaretUp, FaCaretDown} from 'react-icons/fa';
import './style.scss';

const ScrollButtonsWrapper = ({children, scrollbar}) => {
    const scrollTo = useCallback(scrollTop => {
        scrollbar.current.style.scrollBehavior = 'smooth';
        scrollbar.current.scrollTop = scrollTop;
        scrollbar.current.style.scrollBehavior = 'auto'; // Remove smooth scrolling as it breaks the thumb dragging behavior
    }, [scrollbar]);
    const handleOnScrollTop = useCallback(e => {
        e.stopPropagation();
        scrollTo(0);
    } , [scrollTo]);
    const handleOnScrollBottom = useCallback(e => {
        e.stopPropagation();
        scrollTo(scrollbar.current.scrollHeight);
    }, [scrollbar, scrollTo]);

    return (
        React.cloneElement(children, {handleOnScrollTop, handleOnScrollBottom})
    );
};

const ScrollButtons1 = ({handleOnScrollTop, handleOnScrollBottom}) => (
    <div className='scroll-buttons'>
        <FaChevronUp onClick={handleOnScrollTop}/>
        <FaChevronDown onClick={handleOnScrollBottom}/>
    </div>
);

const ScrollButtons2 = ({handleOnScrollTop, handleOnScrollBottom}) => (
    <>
        <FaCaretUp className='scroll-button direction-up' onClick={handleOnScrollTop}/>
        <FaCaretDown className='scroll-button direction-down' onClick={handleOnScrollBottom}/>
    </>
);

const Scrollbar1 = forwardRef(({container}, ref) => {
    const handleOnUpdate = useCallback((track, thumb, container) => {
        const ICONS_SIZE = 14;
        const {scrollHeight, clientHeight, scrollTop} = container;
        const trackLength = container.clientHeight - ICONS_SIZE;
        thumb.style.height = `${Scrollable.getThumbLength(trackLength, clientHeight, scrollHeight)}px`;
        thumb.style.top = `${Scrollable.getThumbPosition(trackLength, clientHeight, scrollHeight, scrollTop) + ICONS_SIZE}px`;
    }, []);
    return (
        <Scrollable.VerticalScrollbar.Default onUpdate={handleOnUpdate} container={container} ref={ref}>
            <ScrollButtonsWrapper scrollbar={container}>
                <ScrollButtons1/>
            </ScrollButtonsWrapper>
        </Scrollable.VerticalScrollbar.Default>
    )
});

const Scrollbar2 = forwardRef(({container}, ref) => {
    const handleOnUpdate = useCallback((track, thumb, container) => {
        const {scrollHeight, clientHeight, scrollTop} = container;
        const {height: trackLength} = container.getBoundingClientRect();
        const thumbTop = Scrollable.getThumbPosition(trackLength, clientHeight, scrollHeight, scrollTop);
        const thumbHeight = Scrollable.getThumbLength(trackLength, clientHeight, scrollHeight) + thumbTop;
        track.style.height = `${trackLength}px`;
        thumb.style.height = `${thumbHeight}px`;
        thumb.style.filter = `hue-rotate(${thumbTop}deg)`;
    }, []);
    return (
        <Scrollable.VerticalScrollbar.Default onUpdate={handleOnUpdate} container={container} ref={ref}/>
    )
});

const Scrollbar3 = forwardRef(({container}, ref) => {
    const handleOnUpdate = useCallback((track, thumb, container) => {
        const BORDER_SIZE = 2;
        const MIN_THUMB = 100;
        const {scrollHeight, clientHeight, scrollTop} = container;
        const {height} = container.getBoundingClientRect();
        const trackLength = height + BORDER_SIZE * 2;
        track.style.top = `-${BORDER_SIZE}px`;
        track.style.height = `${trackLength}px`;
        thumb.style.height = `${Scrollable.getThumbLength(trackLength, clientHeight, scrollHeight, MIN_THUMB)}px`;
        thumb.style.top = `${Scrollable.getThumbPosition(trackLength, clientHeight, scrollHeight, scrollTop, MIN_THUMB)}px`;
    }, []);
    return (
        <Scrollable.VerticalScrollbar.Default onUpdate={handleOnUpdate} container={container} ref={ref}/>
    )
});

const Scrollbar4 = forwardRef(({container}, ref) => {
    const handleOnUpdate = useCallback((track, thumb, container) => {
        const ICON_SIZE = 20;
        const MIN_THUMB = 50;
        const {scrollHeight, clientHeight, scrollTop} = container;
        const {height} = container.getBoundingClientRect();
        const  trackLength = height - ICON_SIZE * 2;
        track.style.height = `${trackLength}px`;
        track.style.top = `${ICON_SIZE}px`;
        thumb.style.height = `${Scrollable.getThumbLength(trackLength, clientHeight, scrollHeight, MIN_THUMB)}px`;
        thumb.style.top = `${Scrollable.getThumbPosition(trackLength, clientHeight, scrollHeight, scrollTop, MIN_THUMB)}px`;
    }, []);
    return (
        <Scrollable.VerticalScrollbar.Default onUpdate={handleOnUpdate} container={container} ref={ref}>
            <ScrollButtonsWrapper scrollbar={container}>
                <ScrollButtons2/>
            </ScrollButtonsWrapper>
        </Scrollable.VerticalScrollbar.Default>
    )
});

const ScrollbarExample = ({children}) => (
    <Scrollable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <Scrollable.VerticalScrollbar>
            {children}
        </Scrollable.VerticalScrollbar>
    </Scrollable>
);

export default () => (
    <div className='scrollbars'>
        <div className='example1'>
            <ScrollbarExample>
                <Scrollbar1/>
            </ScrollbarExample>
        </div>
        <div className='example2'>
            <ScrollbarExample>
                <Scrollbar2/>
            </ScrollbarExample>
        </div>
        <div className='example3'>
            <ScrollbarExample>
                <Scrollbar3/>
            </ScrollbarExample>
        </div>
        <div className='example4'>
            <ScrollbarExample>
                <Scrollbar4/>
            </ScrollbarExample>
        </div>
    </div>
);