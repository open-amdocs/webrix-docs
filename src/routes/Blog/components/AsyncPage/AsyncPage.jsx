import React, {Suspense, memo} from 'react';
import {Helmet} from 'react-helmet';
import {Article, Highlighter, Loader} from 'components';
import './AsyncPage.scss';

const components = {
    pre: props => <React.Fragment {...props}/>,
    inlineCode: props => <Highlighter code={props.children.trim()} inline/>,
};

const AsyncPage = ({title, description, fileName, date}) => {
    const Comp = React.lazy(() => import(`content/posts/${fileName}/readme.mdx`));
    return (
        <Article components={components}>
            <Helmet>
                <title>{title} - Webrix.js Blog</title>
                <meta name='description' content={description}/>
            </Helmet>
            <Suspense fallback={<Loader/>}>
                <h1>{title}</h1>
                <time dateTime={date}>{new Date(date).toLocaleDateString('en',{year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <Comp/>
            </Suspense>
        </Article>
    )
}

export default memo(AsyncPage);