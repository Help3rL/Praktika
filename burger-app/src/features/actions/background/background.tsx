import React from 'react';
import './background.css'

const background = (props:any) => (
            <div className="backdrop">{props.children}</div>
    );

export default background;