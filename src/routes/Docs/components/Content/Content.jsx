import React from 'react';
import {Highlighter} from 'components';
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import {MDXProvider} from '@mdx-js/react'
import LoremIpsum from '../../../Home/components/LoremIpsum/LoremIpsum';
import Movable from '../../content/components/Movable/readme.mdx';
import './Content.scss';

const Code = ({children, className}) => {
    const language = className.replace(/language-/, '')
    return (
        <Highlighter code={children.trim()} language={language}/>
    );
}

const components = {
    pre: props => <React.Fragment {...props}/>,
    code: Code,
    inlineCode: props => <Highlighter code={props.children.trim()} inline/>
}

const Installation = () => (
    <>
        <p><LoremIpsum words={120}/></p>
        <p><LoremIpsum words={120}/></p>
        <p><LoremIpsum words={120}/></p>
    </>
);

const Article = ({children}) => {
    const match = useRouteMatch();
    return (
        <article id={match.url.replace(/\//g, '-').slice(1)}>
            {children}
        </article>
    );
}

const Content = () => {
    const match = useRouteMatch();
    return (
        <MDXProvider components={components}>
            <Switch>
                <Redirect from={match.url} to={`${match.url}/installation`} exact/>
                <Route path={match.url + '/installation'} component={() => <Article><Installation/></Article>}/>
                <Route path={match.url + '/movable'} component={() => <Article><Movable/></Article>}/>
            </Switch>
        </MDXProvider>
    );
}

export default Content;