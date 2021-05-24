import React, {memo} from 'react';
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import AsyncPage from '../AsyncPage/AsyncPage';
import ROUTES from '../../Docs.routes';

const Content = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Redirect from={match.url} to={`${match.url}${ROUTES[0].path}${ROUTES[0].routes[0].path}`} exact/>
            {ROUTES.map(section => section.routes.map(page => (
                <Route
                    key={page.path}
                    path={match.url + section.path + page.path}
                    title={page.title}>
                    <AsyncPage path={section.path + page.path} title={page.title} description={page.description}/>
                </Route>
            )))}
        </Switch>
    );
}

export default memo(Content);