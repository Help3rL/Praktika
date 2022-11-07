import React, { Dispatch, SetStateAction } from 'react';
import './background.css'

interface backgrounde {
    click: Dispatch<SetStateAction<boolean>>
    children: any
}

const background = (props:backgrounde) => (
            <div className="backdrop" onClick={()=>props.click(false)}>{props.children}</div>
    );

export default background;
