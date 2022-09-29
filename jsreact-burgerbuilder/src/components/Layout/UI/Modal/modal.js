import React from 'react'
import './modal.css'
import Backdrop from '../backdrop/backdrop'
import Aux from '../../../../hoc/auxs'
const modal = (props) => (
    <Aux>
    <Backdrop showb={props.show} clicked={props.close}/>
    <div className={'modal-dialog'} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
        {props.children}
    </div>
    </Aux>
)
export default modal;