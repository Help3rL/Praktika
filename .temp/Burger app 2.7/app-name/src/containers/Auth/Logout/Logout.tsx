import React from 'react'
import * as actions from '../../../store/actions/index' 
import { RouteComponentProps } from 'react-router-dom'
import { History } from 'history';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect} from 'react';

export interface LogoutProps extends RouteComponentProps<any>{
    history : History
    onLogout (history: History) : void 
}


const Logout = (props:LogoutProps) => {
   const { onLogout } = props
   useEffect (() => {
    onLogout(props.history)
   }, [onLogout])
    return <Redirect to = '/'/>
}


const mapDispatchToProps = (dispatch:any) => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null ,mapDispatchToProps)(Logout);