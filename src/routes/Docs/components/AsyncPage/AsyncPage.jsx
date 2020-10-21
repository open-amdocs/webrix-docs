import React, {Suspense} from 'react';
import {Loader} from 'components';

const AsyncPage = ({file, title}) => {
    const Comp = React.lazy(file);
    return (
        <article>
            <h1>{title}</h1>
            <Suspense fallback={<Loader/>}>
                <Comp/>
            </Suspense>
        </article>
    );
};

export default AsyncPage;