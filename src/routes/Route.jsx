import React, {Suspense, memo} from 'react';
import {Loader} from 'components';

const Route = ({file}) => {
    const Comp = React.lazy(file);

    return (
        <Suspense fallback={<Loader/>}>
            <Comp/>
        </Suspense>
    )
}

export default memo(Route);