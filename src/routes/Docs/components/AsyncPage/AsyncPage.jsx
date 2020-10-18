import React, {Suspense} from 'react';

const AsyncPage = ({file, title}) => {
    const Comp = React.lazy(file);
    return (
        <article>
            <h1>{title}</h1>
            <Suspense fallback={<div>Loading!</div>}>
                <Comp/>
            </Suspense>
        </article>
    );
};

export default AsyncPage;