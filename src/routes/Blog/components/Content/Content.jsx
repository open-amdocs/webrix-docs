import React from 'react';
import {MDXProvider} from '@mdx-js/react'
import {Route, Switch} from 'react-router-dom';
import ROUTES from '../../Blog.routes';
import AsyncPage from '../AsyncPage/AsyncPage';
import './Content.scss';

const Content = () =>  (
    <MDXProvider>
        <Switch>
            {ROUTES.map(({title, path, fileName, description}) => (
                <Route
                    key={path}
                    path={path}
                    title={title}>
                    <AsyncPage path={path} title={title} fileName={fileName} description={description}/>
                </Route>
            ))}
        </Switch>
    </MDXProvider>
);

export default Content;