import React, {Suspense} from 'react';
import {useLocation} from 'react-router-dom';
import {Loader} from 'components';
import './Examples.scss';

export default () => {
    const {pathname} = useLocation();
    const file = pathname.replace('/examples/', '');
    const Example = React.lazy(() => import(`../Docs/content/${file}`))
    return (
        <div id='example'>
            <Suspense fallback={<Loader/>}>
                <Example/>
            </Suspense>
        </div>
    );
}