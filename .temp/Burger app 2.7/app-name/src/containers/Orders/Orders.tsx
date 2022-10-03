import React, {useEffect} from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

// pagalvoti ar verta daryti orders interfeisa, kadangi orders gali keistis

export interface OrderStateProps {
    onFetchOrders(token:string, userId: number) : void,
    orders: any[]
    loading:boolean
    token: string
    userId: number
}
const Orders = (props:OrderStateProps) => {

    const {onFetchOrders} = props

    useEffect (() => {
        onFetchOrders (props.token, props.userId)
    }, [onFetchOrders])

//paziureti orders type, arba element[] arba ...
   
        let orders:any = <Spinner />
        if (!props.loading) {
            orders = props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients = {order.ingredients}
                    price = {+order.price}
                />
            ))
        }
        return(
            <div>
                {orders}
            </div>
        )
       
    }

// du state interfeisai is skirtingu reduceriu
const mapStateToProps = (state:any) => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
        token: state.authReducer.token,
        userId: state.authReducer.userId
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onFetchOrders: (token:string, userId: number) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Orders, axios));