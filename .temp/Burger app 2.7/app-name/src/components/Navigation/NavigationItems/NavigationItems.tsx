import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import { RouteComponentProps } from 'react-router-dom';
export interface NavigationItemsProps {
    isAuthenticated : boolean | null
}

const navigationItems = (props:NavigationItemsProps) => (
    <ul className = {classes.NavigationItems}>
        <NavigationItem link = "/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? 
        <NavigationItem link = "/orders" >Orders</NavigationItem>
        : null }
        { !props.isAuthenticated ?
         <NavigationItem link = "/auth" >Authenticate</NavigationItem>
         :<NavigationItem link = "/logout" >Logout</NavigationItem> }
    </ul>
);

export default navigationItems