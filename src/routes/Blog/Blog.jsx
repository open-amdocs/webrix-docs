import React from 'react';
import {Helmet} from 'react-helmet';
import {Route, Redirect} from 'react-router-dom';
import routes from './Blog.routes';
import {Container} from 'components';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content'
import './Blog.scss';

const Blog = () => (
    <>
        <Helmet>
            <title>Blog - Webrix.js</title>
            <meta name='description' content='webrix blog posts'/>
        </Helmet>
        <Container>
            <Sidebar/>
            <Content/>
        </Container>
        <Route exact path='/blog'>
            <Redirect to={`/blog/post/${routes[0].fileName}`} />
        </Route>
    </>
);

export default Blog;