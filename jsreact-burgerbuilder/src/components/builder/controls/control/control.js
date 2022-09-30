import React from "react";
const control = (props) =>(
    <div  className='control-button'>
        <div className='label'>{props.label}</div>
        <button onClick={props.removeINGR}>Less</button>
        <button onClick={props.addINGR}>More</button>
    </div>
);
export default control;