import React, { Dispatch, SetStateAction } from 'react';
import './background.css'

interface background {
    click: Dispatch<SetStateAction<boolean>>
    children: any
}

const background = (props:background) => (
            <div className="backdrop" onClick={()=>props.click(false)}>{props.children}</div>
    );

export default background;
