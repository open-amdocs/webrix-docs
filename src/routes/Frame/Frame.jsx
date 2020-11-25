import React, {Suspense} from 'react';
import {useLocation} from 'react-router-dom';
import {Loader} from 'components';
import './Frame.scss';

export default () => {
    const {pathname} = useLocation();
    const file = pathname.replace('/frame/', '');
    const Example = React.lazy(() => import(`../../content/${file}`))
    return (
        <div id='example'>
            <Suspense fallback={<Loader/>}>
                <Example/>
            </Suspense>
        </div>
    );
}