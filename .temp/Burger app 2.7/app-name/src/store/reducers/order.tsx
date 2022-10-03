import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'
import { Reducer } from 'react'
import { Action, AnyAction } from 'redux'

export interface OrderActionsInterface {
    type : string
    orderData: any
    orderId : number
}


export interface OrderReducerInitialState  {
    orders: any[]
    loading: boolean
    purchased: boolean
}

const initialState = {
    orders: [],
    loading: false,
    purchased: true
}

const purchaseInit = (state:OrderReducerInitialState, action:any) => {
    return updateObject(state, {
        purchased: false
    })
}

const purchaseBurgerStart = (state:OrderReducerInitialState, action:any) => {
    return updateObject(state, {
        loading: true
    })
}

const purchaseBurgerSuccess = (state:OrderReducerInitialState, action:any) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId} );
            return updateObject(state, {
                loading:false,
                purchased:true,
                orders: state.orders.concat(newOrder)
            })
}

const purchaseBurgerFail = (state:OrderReducerInitialState, action:any) => {
    return updateObject (state,{ loading: true})
}
const fetchOrdersStart = (state:OrderReducerInitialState, action:any) => {
    return updateObject (state,{ loading: true})
}

const fetchOrderSuccess = (state:OrderReducerInitialState, action:any) => {
    return updateObject(state, {
        orders:action.orders,
        loading:false
    })
}

const fetchOrderFail = (state:OrderReducerInitialState, action:any) => {
    return updateObject(state, {loading : false})
}

const reducer: Reducer<OrderReducerInitialState | undefined, AnyAction> = (state:OrderReducerInitialState = initialState , action:any) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action)
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action)
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action)
        case actionTypes.FETCH_ORDERS_START:return fetchOrdersStart (state,action)
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess (state, action)
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrderFail(state, action)
        default : 
            return state;
    }
}

export default reducer;