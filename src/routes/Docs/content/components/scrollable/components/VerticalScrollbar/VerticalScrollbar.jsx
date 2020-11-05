import React from 'react';
import {Movable} from 'webrix';
import './VerticalScrollbar.scss';

export default class VerticalScrollbar extends React.PureComponent {

    track = React.createRef();
    thumb = React.createRef();

    handleOnBeginMove = e => {
        e.stopPropagation();
        e.preventDefault();
        this.initialScroll = this.props.container.current.scrollTop;
    };

    handleOnMove = ({dy}) => {
        const container = this.props.container.current;
        const {clientHeight, scrollHeight} = container;
        const handleHeight = this.thumb.current.getBoundingClientRect().height;
        container.scrollTop = this.initialScroll + dy * (scrollHeight - clientHeight) / (clientHeight - handleHeight);
    };

    handleOnClick = e => {
        // Ignore clicks on the thumb itself
        if (!this.thumb.current.contains(e.target)) {
            const container = this.props.container.current;
            const track = this.track.current;
            const {top, height} = track.getBoundingClientRect();
            const {scrollHeight} = this.props.container.current;
            const ratio = (e.clientY - top) / height;
            container.style.scrollBehavior = 'smooth';
            container.scrollTop = ratio * scrollHeight;
            container.style.scrollBehavior = 'auto'; // Remove smooth scrolling as it breaks the thumb dragging behavior
        }
    };

    update() {
        const container = this.props.container.current;
        const track = this.track.current;
        const thumb = this.thumb.current;

        if (this.isScrollable()) {
            this.props.onUpdate(track, thumb, container);
            track.classList.add('visible');
        } else {
            track.classList.remove('visible');
        }
    }

    isScrollable() {
        const {clientHeight, scrollHeight} = this.props.container.current;
        return clientHeight !== scrollHeight;
    }

    render() {
        return (
            <div className='scrollbar-track vertical-scrollbar-track' ref={this.track} onClick={this.handleOnClick}>
                <Movable className='scrollbar-thumb' ref={this.thumb} onBeginMove={this.handleOnBeginMove} onMove={this.handleOnMove}>
                    <div className='scrollbar-thumb-inner'/>
                </Movable>
                {this.props.children}
            </div>
        );
    }
}
