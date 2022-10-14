import React from 'react';
import './background.css'

const background = (props:any) => (
            <div className="backdrop" onClick={()=>false}>{props.children}</div>
    );

export default background;