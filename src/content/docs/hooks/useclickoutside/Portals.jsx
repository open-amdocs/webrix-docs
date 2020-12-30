import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import cls from 'classnames';
import {useClickOutside} from 'webrix/hooks';
import './Portals.scss';

export default () => {
    const [inside, setInside] = useState(null);
    const handleOnClickOutside = useCallback(() => setInside(false), [setInside]);
    const handleOnMouseDownCapture = useClickOutside(handleOnClickOutside)
    return (
        ReactDOM.createPortal(<div className={cls('depth-0', {inside})} onMouseDownCapture={handleOnMouseDownCapture} onClick={() => setInside(true)}>
            {ReactDOM.createPortal(<div className={cls('depth-1', {inside})}>
                {ReactDOM.createPortal(<div className={cls('depth-2', {inside})}/>, document.body)}
            </div>, document.body)}
        </div>, document.body)
    );
};