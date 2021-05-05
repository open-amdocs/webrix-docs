import React, {useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import ROUTES from './Router.routes.js';
import {ErrorBoundary} from 'components';
import './Router.scss';

const Router = () => {
    const location = useLocation();
    useEffect(() => {
        // If a hash exists, it indicates an external referral so the H2 will scroll into position
        // Otherwise, no hash indicates navigation between pages, so we scroll back to top.
        if (!location.hash) {
            document.querySelector('.scrollbar-inner').scrollTop = 0;
        }
    }, [location]);

    return (
        <Switch>
            {ROUTES.map(({path, name, component: Comp}) => (
                <Route path={path} key={path}>
                    <div id={`route-${name}`} className='route'>
                        <ErrorBoundary>
                            <Comp/>
                        </ErrorBoundary>
                    </div>
                </Route>
            ))}
        </Switch>
    );
}

export default Router;