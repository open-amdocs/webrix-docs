import React from 'react';
import {Container} from 'components';
import {FaCode} from 'react-icons/fa';
import './Hooks.scss';

const HOOKS = ['useBooleanState', 'usePrevious', 'useMounted', 'useDebounce', 'useTimeout', 'useClickOutside', 'useConditionalCallback', 'useObject'];

const Features = () => (
    <Container>
        <section className='hooks'>
            <h2>Hooks</h2>
            <div className='grid'>
                {HOOKS.map(hook => (
                    <a href={`/docs/hooks/${hook.toLowerCase()}`} className='hook'>
                        <FaCode/>
                        {hook}()
                    </a>
                ))}
            </div>
        </section>
    </Container>
);

export default Features;