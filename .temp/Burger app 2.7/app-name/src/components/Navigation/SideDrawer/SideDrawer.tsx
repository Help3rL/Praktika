import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Hocs'

export interface SideDrawerProps {
    closed(argument:boolean|string|React.MouseEvent<HTMLElement>) : void ;
    open : boolean;
    isAuth: boolean | null
}

const sideDrawer = (props:SideDrawerProps) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return(
        <Aux>
             <Backdrop show = {props.open} clicked = {props.closed}/>
        <div className = {attachedClasses.join(' ')} onClick = {props.closed}>
            <div className = {classes.Logo}> {/* Logo klase skiriasi nuo logo.module.css klases, kadangi klases yra locally scoped, siuo atveju Logo klase yra is Toolbar.module.css */}
                <Logo />
            </div>
            <nav>
                <NavigationItems isAuthenticated = {props.isAuth}/>
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer