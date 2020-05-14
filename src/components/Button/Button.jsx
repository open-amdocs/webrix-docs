import React from 'react';
import {node, oneOf} from 'prop-types';
import {Sizes, Types} from "./Button.constants";
import './Button.scss';

const Button = ({children, size, type, ...props}) => (
    <div className={`button size-${size.toLowerCase()} type-${type.toLowerCase()}`} {...props}>{children}</div>
);

Button.propTypes = {
    children: node,
    size: oneOf(Object.values(Sizes)),
    type: oneOf(Object.values(Types)),
};

Button.defaultProps = {
    children: null,
    size: Sizes.SMALL,
    type: Types.PRIMARY,
};

export default Button;