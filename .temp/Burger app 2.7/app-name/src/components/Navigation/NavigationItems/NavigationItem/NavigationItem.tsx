import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom';
export interface NavigationItem {
    children: React.ReactNode; // 👈️ type children
    link: any;
    // active?:any;
    exact?: boolean
}


const navigationItem = (props: NavigationItem) => (
    <li className = {classes.NavigationItem}>
        <NavLink 
        to = {props.link}
        exact = {props.exact}
        activeClassName = {classes.active} >{props.children}</NavLink>
    </li>
);

export default navigationItem;