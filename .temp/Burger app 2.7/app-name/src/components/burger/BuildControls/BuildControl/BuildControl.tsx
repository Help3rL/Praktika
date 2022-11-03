import React, { MouseEvent } from 'react'
import classes from './BuildControl.module.css'

interface ControlsInterface {
    label: string;
    added(argument:string|React.MouseEvent<HTMLElement>) : void ;
    removed(argument:string|React.MouseEvent<HTMLElement>) : void ;
    // type: string;
    // disabled: any;
}

const buildControl = (props:ControlsInterface) => (
    <div className = {classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>
        <button className = {classes.Less} onClick = {props.removed} >Less</button>
        <button className = {classes.More} onClick = {props.added}>More</button>
    </div>
); 

export default buildControl;