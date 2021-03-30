import React, {useRef, useState, useCallback} from 'react';
import {Movable} from 'webrix/components';
import {useTimeout, useDimensions} from 'webrix/hooks';
import {FaPlay, FaPause} from 'react-icons/fa';
import video from './video.mp4';
import './style.scss';

const HANDLE_WIDTH = 14;

const useVideoControl = (video, setLeft, lineWidth, setIsPlaying) => {
    // Although we can use the onTimeUpdate video event, it may be fired at a low
    // frequency. Using useTimeout() provides a smoother experience
    const {start, stop} = useTimeout(useCallback(() => {
        setLeft((video.current.currentTime / video.current.duration) * lineWidth);
    }, [lineWidth, setLeft, video]), 100, true);

    return {
        play: () => {
            video.current.play();
            setIsPlaying(true);
            start();
        },
        pause: () => {
            video.current.pause();
            setIsPlaying(false);
            stop();
        },
    };
}

const PlayButton = ({playing, onClick}) => {
    const Comp = playing ? FaPause : FaPlay;
    return (
        <Comp className='play-button' onClick={onClick}/>
    );
};

const VideoPlayer = ({src}) => {
    const video = useRef();
    const line = useRef();
    const [left, setLeft] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const lineWidth = useDimensions(line).width - HANDLE_WIDTH;
    const {play, pause} = useVideoControl(video, setLeft, lineWidth, setIsPlaying);

    const handleOnMove = useCallback(({dx}) => {
        const timePercent = (left + dx) / lineWidth;
        video.current.currentTime = Math.round(timePercent * video.current.duration);
        setLeft(timePercent * lineWidth);
    }, [lineWidth, video, left]);

    return (
        <div className='video-player'>
            <video className='video' ref={video} src={src}/>
            <div className='controls'>
                <PlayButton playing={isPlaying} onClick={isPlaying ? pause : play}/>
                <div className='slider'>
                <div className='fill' style={{width: left + HANDLE_WIDTH / 2}}/>
                <div className='line' ref={line} />
                <Movable className='handle' style={{transform: `translate(${left}px, calc(-50% - 1px))`}}
                    onBeginMove={pause}
                    onMove={handleOnMove}
                    onEndMove={play}/>
                </div>
            </div>
        </div>
    );
};

export default () => <VideoPlayer src={video}/>;
