import React, {useState, useEffect, useContext} from 'react';
import {Link, useRouteMatch, useLocation} from 'react-router-dom';
import {FaCode} from 'react-icons/fa';
import {slugify} from 'utility';
import {PageSectionContext} from '../../Docs.context';
import ROUTES from '../../Docs.routes';
import cls from 'classnames';
import './Sidebar.scss';

const PageItems = () => {
    const {pathname} = useLocation();
    const {path} = useRouteMatch();
    const [items, setItems] = useState([]);
    const {section} = useContext(PageSectionContext);

    useEffect(() => {
        (async () => {
            const text = await import(`!raw-loader!content/docs${pathname.replace(path, '')}/readme.mdx`);
            const match = text.default.match(/^## ([^\r\n]+)/gm);
            if (match) {
                setItems(match.map(item => item.replace('## ', '')));
            }
        })();
    }, [path, pathname]);

    return !items.length ? null : (
        <ul>
            {items.map(item => (
                <li key={item} className={cls({active: section === `#${slugify(item)}`})}><a href={`#${slugify(item)}`}>{item}</a></li>
            ))}
        </ul>
    );
}

const Page = ({url, title, icon: Icon}) => {
    const location = useLocation();
    const active = location.pathname === url;

    return (
        <li>
            <Link className={cls({active})} to={url}><Icon/>{title}</Link>
            {active && <PageItems/>}
        </li>
    );
}

const Section = ({title, pages, path}) => {
    const match = useRouteMatch();
    return (
        <li>
            <div className='title'>{title}</div>
            <ul>
                {pages.map((page, i) => (
                    <Page key={i} url={`${match.url}${path}${page.path}`} title={page.title} icon={page.icon || FaCode}/>
                ))}
            </ul>
        </li>
    )
}

const Sidebar = () => (
    <nav id='sidebar'>
        <ul>
            {ROUTES.map((section, i) => (
                <Section key={i} title={section.title} pages={section.routes} path={section.path}/>
            ))}
        </ul>
    </nav>
);

export default Sidebar;
