import React from "react";
import './backdrop.css';
const backdrop= (props) => (
    props.showb?<div className='backdrop' onClick={props.clicked}></div>:null
)
export default backdrop;