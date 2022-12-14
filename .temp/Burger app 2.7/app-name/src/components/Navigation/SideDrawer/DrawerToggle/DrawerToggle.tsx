import React from 'react';
import classes from './DrawerToggle.module.css'
export interface DrawerToggleProps{
    clicked():void;
}   


const drawerToggle = (props:DrawerToggleProps) => (
    <div className = {classes.DrawerToggle} onClick = {props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;