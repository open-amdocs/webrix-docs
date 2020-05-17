import React from 'react';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const splitted = text.split(' ');

const LoremIpsum = ({words}) => {
    let final = '';
    for (let i = 0; i < words / splitted.length - 1; i++) {
        final += text + ' ';
    }
    final += splitted.slice(0, words % splitted.length).join(' ');
    return final;
};

export default LoremIpsum;