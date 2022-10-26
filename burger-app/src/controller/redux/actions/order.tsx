import * as actionTypes from './actionTypes'

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

export const purchaseBurgerFail = (error:any) => {
    return {
       type: actionTypes.PURCHASE_BURGER_FAIL,
       error: error
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

export const fetchOrdersFail = (error:any) => {
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
