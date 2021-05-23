import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ROUTES from '../../Blog.routes';
import AsyncPage from '../AsyncPage/AsyncPage';

const Content = () =>  (
    <Switch>
        {ROUTES.map(({title, fileName, description, date}) => (
            <Route
                key={fileName}
                path={`/blog/post/${fileName}`}
                title={title}>
                <AsyncPage title={title} fileName={fileName} description={description} date={date}/>
            </Route>
        ))}
    </Switch>
);

export default Content;