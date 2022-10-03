import React, {Component, useState} from 'react';
import Aux from '../Hocs'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import { connect } from 'react-redux'


export interface LayoutProps  {
    children?: React.ReactNode
    isAuthenticated: boolean | null
  };

export interface LayoutState {
    showSideDrawer: boolean;
}

const Layout = (props:LayoutProps) => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible ] = useState(false);
    
    const sideDrawerClosedHandler  = () => {
       setSideDrawerIsVisible(false)
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }
 
        return (
        <Aux>
            <Toolbar
                isAuth = {props.isAuthenticated}
                drawerToggleClicked = {sideDrawerToggleHandler}/>
            <SideDrawer 
                isAuth = {props.isAuthenticated}
                open = {sideDrawerIsVisible} 
                closed = {sideDrawerClosedHandler}/>

                <main className = {classes.Content}>
                    {props.children}
                </main>
        </Aux>
        )
    }

    
   
const mapStateToProps = (state:any) => {
    return {
        isAuthenticated : state.authReducer.token !== null
    }
}

export default connect (mapStateToProps) (Layout)


