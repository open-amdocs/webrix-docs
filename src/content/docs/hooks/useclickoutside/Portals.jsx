import React, {useState} from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import cx from 'classnames';
import {useClickOutside} from 'webrix/hooks';
import './Portals.scss';

const Box = ({children, inside, ...props}) => createPortal(
    <div {...props} className={cx('box', {inside})}>{children}</div>
, document.body);

export default () => {
    const [inside, setInside] = useState(null);
    const handleOnMouseDownCapture = useClickOutside(() => setInside(false));

    return (
        <Box
            onMouseDownCapture={handleOnMouseDownCapture}
            onClick={() => setInside(true)}
            inside={inside}>
            <Box inside={inside}>
                <Box inside={inside}/>
            </Box>
        </Box>
    );
};