import React, {memo} from 'react';
import {Highlighter} from 'components';
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import {MDXProvider} from '@mdx-js/react'
import AsyncPage from '../AsyncPage/AsyncPage';
import Code from './components/Code/Code';
import H2 from './components/H2/H2';
import H3 from './components/H3/H3';
import ROUTES from '../../Docs.routes';
import './Content.scss';

const components = {
    pre: props => <React.Fragment {...props}/>,
    code: Code,
    h2: H2,
    h3: H3,
    inlineCode: props => <Highlighter code={props.children.trim()} inline/>,
}

const Content = () => {
    const match = useRouteMatch();
    return (
        <MDXProvider components={components}>
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
        </MDXProvider>
    );
}

export default memo(Content);