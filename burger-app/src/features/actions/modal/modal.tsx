import React from 'react';
import { connect } from 'react-redux';
import './modal.css'
import Backdrop from '../background/background'
function mapStateToProps(state:any) {
    return {

    };
}

const modal = (props:any) => {
        return (
                <Backdrop>
                    <div className='modal'>
                        {props.children}
                    </div>
                </Backdrop>
        );
}

export default connect(
    mapStateToProps,
)(modal);