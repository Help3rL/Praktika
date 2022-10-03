import React from 'react'
import classes from './Backdrop.module.css'
import { AxiosError } from 'axios';

type BackdropProps = {
    show?:null | AxiosError | boolean
    clicked?(argument:string|React.MouseEvent<HTMLElement>): void;
  };

const backdrop = (props:BackdropProps) => (
    props.show ? <div className = {classes.Backdrop} onClick = {props.clicked}></div> : null
);

export default backdrop;