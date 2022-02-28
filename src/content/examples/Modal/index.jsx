import React, {useCallback, useState, useRef} from 'react';
import {FaTimes, FaMinus, FaCaretDown, FaCaretUp} from 'react-icons/fa';
import {Poppable, Resizable, Movable} from 'webrix/components';
import {useVisibilityState} from 'webrix/hooks';
import './style.scss';

const {vcenter, hcenter} = Poppable.Placements;
const {update: mUpdate, move} = Movable.Operations;
const {update: rUpdate, lock, resize, min, max} = Resizable.Operations;

const Modal = ({children, title, onClose}) => {
    const modal = useRef();
    const [placement, setPlacement] = useState({width: 300});
    const [manual, setManual] = useState();
    const mProps = Movable.useMove([
        move(modal),
        mUpdate(p => setManual(c => ({...c, ...p}))),
    ]);
    const rProps = Resizable.useResize([
        resize(modal),
        min(180, 180),
        max(300, 300),
        lock(),
        rUpdate(setManual),
    ]);
    const getPlacements = useCallback((rbr, tbr) => [
        {...vcenter(rbr, tbr), ...hcenter(rbr, tbr)}, // Screen center
    ], []);

    return (
        <Poppable.Manual ref={modal} placement={manual || placement} placements={getPlacements} className='modal' onPlacement={setPlacement}>
            <Resizable {...rProps}>
                <Resizable.Resizer.All/>
            </Resizable>
            <Movable {...mProps} className='modal-header'>
                <div className='controls'>
                    <FaTimes className='close' onClick={onClose}/>
                    <FaMinus className='minimize'/>
                    <div className='expand' onClick={() => setManual(c => ({...c, width: 300, height: 300}))}>
                        <FaCaretUp/>
                        <FaCaretDown/>
                    </div>
                </div>
                {title}
            </Movable>
            <div className='modal-body'>
                {children}
            </div>
        </Poppable.Manual>
    );
};

export default () => {
    const {visible, show, hide} = useVisibilityState();
    return (
        <>
            <div className='button' onClick={show}>Click Here!</div>
            {visible && (
                <Modal onClose={hide} title='Modal Title'>
                    <p>This is a resizable & movable modal.</p>
                    <p>You can move it by clicking on the header and dragging it.</p>
                    <p>You can resize it by clicking on any one of the edges and dragging it.</p>
                </Modal>
            )}
        </>
    );
}