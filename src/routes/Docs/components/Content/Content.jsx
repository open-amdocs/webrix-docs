import React from 'react';
import {Highlighter} from 'components';
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import {MDXProvider} from '@mdx-js/react'
import AsyncPage from '../AsyncPage/AsyncPage';
// import LoremIpsum from '../../../Home/components/LoremIpsum/LoremIpsum';
import ROUTES from '../../Docs.routes';
import './Content.scss';

const Code = ({children, className}) => {
    const language = className.replace(/language-/, '')
    return (
        <Highlighter code={children.trim()} language={language}/>
    );
}

const H2 = ({children}) => {
    const id = children.toLowerCase().replace(/ /g, '-');
    const ref = node => {
        const {hash} = window.location;
        if (hash !== '') {
            const id = hash.replace('#', '');
            if (node && node.id === id) node.scrollIntoView();
        }
    };
    return (
        <h2><a id={id} href={`#${id}`} ref={ref}>{children}</a></h2>
    )
}

const components = {
    pre: props => <React.Fragment {...props}/>,
    code: Code,
    h2: H2,
    inlineCode: props => <Highlighter code={props.children.trim()} inline/>,
}

// const Installation = () => (
//     <>
//         <p><LoremIpsum words={120}/></p>
//         <p><LoremIpsum words={120}/></p>
//         <p><LoremIpsum words={120}/></p>
//     </>
// );
//
// const Article = ({children}) => {
//     const match = useRouteMatch();
//     return (
//         <article id={match.url.replace(/\//g, '-').slice(1)}>
//             {children}
//         </article>
//     );
// }
//
// ROUTES.map(section => section.routes.map(page => (
//     console.log(`../../content${section.path}${page.path}/readme.mdx`)
// )));


const Content = () => {
    const match = useRouteMatch();
    return (
        <MDXProvider components={components}>
            <Switch>
                <Redirect from={match.url} to={`${match.url}${ROUTES[0].path}${ROUTES[0].routes[0].path}`} exact/>
                {ROUTES.map(section => section.routes.map(page => (
                    <Route key={page.path} path={match.url + section.path + page.path} component={() => <AsyncPage file={() => import(`../../content${section.path}${page.path}/readme.mdx`)} title={page.title}/>}/>
                )))}
            </Switch>
        </MDXProvider>
    );
}

export default Content;