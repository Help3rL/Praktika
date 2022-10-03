import React from 'react'
import classes from './Button.module.css'

export interface ButtonProps {
    btnType:string
    clicked?: any
    children?: React.ReactNode
    disabled?:boolean
    onClick?:any
}

const button = (props:ButtonProps) => (
    <button
        disabled = {props.disabled}
        className = {[classes.Button, classes[props.btnType]].join(' ')}
        onClick = {props.clicked}
    >{props.children}</button>
)

export default button