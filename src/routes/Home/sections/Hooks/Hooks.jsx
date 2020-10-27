import React from 'react';
import {Container} from 'components';
import {FaCode} from 'react-icons/fa';
import Button from '../../components/Button/Button';
import './Hooks.scss';

const HOOKS = ['useBooleanState', 'usePrevious', 'useMounted', 'useDebounce', 'useTimeout', 'useClickOutside', 'useConditionalCallback', 'useObject'];

const Features = () => (
    <Container>
        <section className='hooks'>
            <h2>Hooks</h2>
            <div className='grid'>
                {HOOKS.map(hook => (
                    <Button key={hook} href={`/docs/hooks/${hook.toLowerCase()}`}>
                        <FaCode/>
                        {hook}()
                    </Button>
                ))}
            </div>
        </section>
    </Container>
);

export default Features;