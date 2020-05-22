import React, {Suspense} from 'react';

const Route = ({file}) => {
    const Comp = React.lazy(file);
    return (
        <Suspense fallback={<div>'Loading!'</div>}>
            <Comp/>
        </Suspense>
    )
}

export default Route;