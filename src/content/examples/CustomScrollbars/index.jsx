import React, {useContext} from 'react';
import {Scrollable} from 'webrix/components';
import {FaChevronUp, FaChevronDown, FaCaretUp, FaCaretDown} from 'react-icons/fa';
import './style.scss';

const scrollTo = (scrollbar, scrollTop) => {
    scrollbar.current.style.scrollBehavior = 'smooth';
    scrollbar.current.scrollTop = scrollTop;
    scrollbar.current.style.scrollBehavior = '';
};

const scrollToTop = scrollbar => scrollTo(scrollbar, 0);
const scrollToBottom = scrollbar => scrollTo(scrollbar, scrollbar.current.scrollHeight);

const Scrollbar1 = () => {
    const {container} = useContext(Scrollable.Context);
    return (
        <div className='scrollbar scrollbar1'>
            <FaChevronUp onClick={() => scrollToTop(container)}/>
            <FaChevronDown onClick={() => scrollToBottom(container)}/>
            <Scrollable.VerticalScrollbar.Default container={container}/>
        </div>
    );
};

const Scrollbar2 = () => (
    <div className='scrollbar scrollbar2'>
        <Scrollable.VerticalScrollbar.Default/>
    </div>
);

const Scrollbar3 = () => (
    <div className='scrollbar scrollbar3'>
        <Scrollable.VerticalScrollbar.Default/>
    </div>
);

const Scrollbar4 = () => {
    const {container} = useContext(Scrollable.Context);
    // in this example the
    return (
        <div className='scrollbar scrollbar4'>
            <FaCaretUp className='scroll-button direction-up' onClick={() => scrollToTop(container)}/>
            <Scrollable.VerticalScrollbar.Default container={container}/>
            <FaCaretDown className='scroll-button direction-down' onClick={() => scrollToBottom(container)}/>
        </div>
    );
};

const Scrollbars = ({children}) => (
    <Scrollable>
        <div contentEditable spellCheck='false'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <Scrollable.VerticalScrollbar>
            {children}
        </Scrollable.VerticalScrollbar>
    </Scrollable>
);

export default () => (
    <>
        <Scrollbars>
            <Scrollbar1/>
        </Scrollbars>
        <Scrollbars>
            <Scrollbar2/>
        </Scrollbars>
        <Scrollbars>
            <Scrollbar3/>
        </Scrollbars>
        <Scrollbars>
            <Scrollbar4/>
        </Scrollbars>
    </>
);