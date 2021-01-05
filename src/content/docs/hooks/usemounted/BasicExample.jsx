import React from 'react';
import {useMounted} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const mounted = useMounted();
    return (
        <div>
            {mounted ? 'mounted' : 'unmounted'}
        </div>
    );
};
