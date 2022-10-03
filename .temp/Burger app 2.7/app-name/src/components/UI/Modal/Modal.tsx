import React from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Hocs'
import Backdrop from '../Backdrop/Backdrop'
import { AxiosError } from 'axios';

export interface VoidFunction {
    ():void
}
export interface ModalProps {
    children?: React.ReactNode | unknown // 👈️ type children
    show?: null | AxiosError | boolean;
    modalClosed?: VoidFunction ;
    clicked?(argument:string|React.MouseEvent<HTMLElement>) : void ;
  };


const  Modal = (props:ModalProps):JSX.Element =>  {
    // shouldComponentUpdate(nextProps:any, nextState:any) {
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }

        return(
            <Aux>
        <Backdrop show = {props.show} clicked = {props.modalClosed}/>
            <div className = {classes.Modal}
        style = {{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {!props.children}
        </div>
    </Aux>
        )
    
}
   
export default React.memo(Modal, (prevProps, nextProps) => 
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);