import React from 'react';
import {animated} from '@react-spring/web';

export const Box = ({props, item}) => {
    return (
        <animated.div style={props} className="Box">
            {item}
        </animated.div>
    );
};
