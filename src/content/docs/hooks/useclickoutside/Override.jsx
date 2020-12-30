import React, {useState, useCallback} from 'react';
import {ClickOutside, ClickOutsideOverride} from 'webrix/hooks';
import './Override.scss';

export default () => {
    const [output, setOutput] = useState([]);
    const push = useCallback(message => setOutput(m => [...m, message]), [setOutput]);
    const condition = useCallback((isClickedInside, e) => !isClickedInside && !e.target.closest('.inside'), []);

    return (
        <div onMouseDown={() => setOutput([])}>
            <fieldset className='log'>
                <legend>Output:</legend>
                {output.length ? 'Outside ' : ''}
                {output.join(' & ')}
            </fieldset>
            <ClickOutsideOverride condition={condition}>
                <ClickOutside onClickOutside={() => push('A')}>
                    <div>A</div>
                </ClickOutside>
                <ClickOutside onClickOutside={() => push('B')}>
                    <div>B</div>
                </ClickOutside>
            </ClickOutsideOverride>
            <div className='inside'>A & B</div>
        </div>
    );
};
