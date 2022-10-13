import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state:any) {
    return {

    };
}

function mapDispatchToProps(dispatch:any) {
    return {

    };
}

const auth = (props:any) => {
    if(props.case === 'Login'){
        return (
            <div className='login'>
                <fieldset>
                    <h2>Login form</h2>
                    <label htmlFor="username">Email</label>
                    <input type="text" name="username" id="username"/><br/>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" /><br/>
                    <button>Login</button>
                    <button>Sign Up</button>
                </fieldset>
            </div>
        );
    }
    if (props.case === 'Singup') {
        
    }
    return (<div>error</div>)
}
export default auth;