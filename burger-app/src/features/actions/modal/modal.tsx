import React, { Dispatch, SetStateAction } from 'react';
import { connect } from 'react-redux';
import './modal.css'
import Backdrop from './background/background'
interface modal {
    click: Dispatch<SetStateAction<boolean>>
    children: any
}

const modal = (props:modal) => {
        return (
                <Backdrop click={props.click}>
                    <div className='modal'>
                        {props.children}
                    </div>
                </Backdrop>
        );
}

export default modal;