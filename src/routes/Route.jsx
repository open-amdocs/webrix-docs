import React, {Suspense, memo, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Loader} from 'components';

const Route = ({file}) => {
    const Comp = React.lazy(file);
    const history = useHistory();

    // Scroll to top when navigating between routes (excluding hash navigation)
    useEffect(() => {
        const unlisten = history.listen(({hash}) => {
            if (!hash) {
                console.log(hash);
                document.querySelector('.route').scrollIntoView();
            }
        });
        return () => unlisten();
    }, []);

    return (
        <Suspense fallback={<Loader/>}>
            <Comp/>
        </Suspense>
    )
}

export default memo(Route);