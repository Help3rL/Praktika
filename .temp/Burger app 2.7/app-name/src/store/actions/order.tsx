import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
import { Axios, AxiosError, AxiosResponse } from 'axios';
//pakeisti typus is any
export const purchaseBurgerSuccess = (id:number, orderData?:any) => {
    return {
       type: actionTypes.PURCHASE_BURGER_SUCCESS,
       orderId: id,
       orderData: orderData
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurgerFail = (error:AxiosError) => {
    return {
       type: actionTypes.PURCHASE_BURGER_FAIL,
       error: error
    }
}

export const purchaseBurger = ( orderData:any, token:string ) => {
    return (dispatch:any) => {
        dispatch (purchaseBurgerStart());
        axios.post('/orders.json?auth='+ token, orderData )
            .then((response: AxiosResponse) => {
            dispatch (purchaseBurgerSuccess(response.data.name, orderData))
            } ).catch(error => {
                dispatch (purchaseBurgerFail( error ))
            });
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders:any) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error:AxiosError) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token:string, userId:number) => {
    return (dispatch: any) => {
        dispatch(fetchOrdersStart())
        const queryParams = '?auth=' +token + '&orderBy="userId"&equalTo"' + userId + ' " '
        axios.get('/orders.json' + queryParams)
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key], 
                    id:key})
            }
            dispatch(fetchOrdersSuccess(fetchedOrders))
        }).catch(err => {
            dispatch(fetchOrdersFail(err))
        })
    }
}
