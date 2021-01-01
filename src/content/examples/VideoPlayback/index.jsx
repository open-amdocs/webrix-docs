import React, {useRef, useState, useEffect, useCallback} from 'react';
import {Movable} from 'webrix/components';
import './style.scss';

const HANDLE_WIDTH = 20;

const useWidth = (element, sub) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(element.current.getBoundingClientRect().width - sub);
    }, [element, sub]);
    return width;
};

const VideoPlayer = ({src}) => {
    const video = useRef();
    const line = useRef();
    const [left, setLeft] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const lineWidth = useWidth(line, HANDLE_WIDTH);

    const handlePlay = () => {
        setIsPlaying(() => {
            video.current.play();
            return true;
        });
    };

    const handlePause = () => {
        setIsPlaying(() => {
            video.current.pause();
            return false;
        });
    };

    const handleTimeUpdate = useCallback(() => {
        setLeft((video.current.currentTime / video.current.duration) * lineWidth);
    }, [lineWidth, setLeft, video]);

    const handleOnMove = useCallback(({dx}) => {
        const timePercent = (left + dx) / lineWidth;
        video.current.currentTime = timePercent * video.current.duration;
    }, [lineWidth, video, left]);

    return (
        <div className='video-player'>
            <video className='video' ref={video} src={src} onTimeUpdate={handleTimeUpdate}/>
            <div className='controls'>
                <div className={`btn ${isPlaying ? 'pause' : 'play'}`} onClick={isPlaying ? handlePause : handlePlay}/>
                <div className='slider'>
                <div className='fill' style={{width: left + HANDLE_WIDTH / 2}}/>
                <div className='line' ref={line} />
                <Movable className='handle' style={{transform: `translate(${left}px, calc(-50% - 1px))`}}
                    onBeginMove={handlePause}
                    onMove={handleOnMove}
                    onEndMove={handlePlay}/>
                </div>
            </div>
        </div>
    );
};

export default () => <VideoPlayer src='https://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4'/>;
