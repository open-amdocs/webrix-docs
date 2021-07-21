import React, {useContext, useEffect, useRef} from 'react';
import {FaLink} from 'react-icons/fa';
import {slugify} from 'utility';
import {PageSectionContext} from '../../../../Docs.context';
import './H2.scss';

export default ({children}) => {
    const id = slugify(children);
    const {setSection} = useContext(PageSectionContext);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setSection(`#${id}`);
            }
        }, {
            rootMargin: '-60px 0px -50% 0px',
            root: document.getElementById('app'),
            threshold: 0,
        });
        observer.observe(ref.current);
        // This part will only be executed when a page is rendered for
        // the first time with a hash, so we need to update the sidebar and
        // scroll the section into view. Further clicks on H2 headings or the
        // sidebar will do that automatically.
        if (window.location.hash === `#${id}`) {
            setSection(window.location.hash);
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
        return () => observer.disconnect();
    }, [id, setSection]);

    return (
        <h2 ref={ref} id={id}><a href={`#${id}`}><FaLink/>{children}</a></h2>
    );
}