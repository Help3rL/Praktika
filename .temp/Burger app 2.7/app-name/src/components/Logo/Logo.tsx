import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

export interface LogoProps {

}

const logo = (props:LogoProps) => (
        <div className = {classes.Logo}>
            <img src = {burgerLogo} alt="MyBurger"></img>
        </div>
);

export default logo;