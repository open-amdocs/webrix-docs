import React, {Suspense, memo} from 'react';
import {Loader} from 'components';

const AsyncPage = ({path, title}) => {
    const Comp = React.lazy(() => import(`../../content${path}/readme.mdx`));
    return (
        <article>
            <h1>{title}</h1>
            <Suspense fallback={<Loader/>}>
                <Comp/>
            </Suspense>
        </article>
    );
};

export default memo(AsyncPage);