import { MouseEventHandler } from "react";

export type order = {
    ingrName: StaticIngrData,
    orderCost: number,
    paid: boolean,
    id: number,
    amount: number,
    date: Date
}

export type InitialStates = {
    loading: boolean;
    ingr: StaticIngrData
    totalPrice: number;
    error: boolean;
    building: boolean;
    buying: boolean;
    update?: any;
    DeliveryCost?: number;
  };

export interface UserState{
    userName: string,
    userSurname: string,
    userAddress: string,
    userEmail: string,
    userOrders: Array<order>,
    userPhoneNumber?: number,
    userlogoutTime: number,
    uid: string
}
export type props = {
    ingr: StaticIngrData,
    [Element: string]: any,
    config: object,
    orderData: object
}

export type StaticIngrData = {
    [Name:string]: [string, number, number?]
    // In structure| Ingredients: [Name, price, amount]   
}

export type Data = {
    startorder?: undefined;
    ingrData?: StaticIngrData
    orderData?: order
    userData?: UserState
    activeData?: InitialStates
    activeProps?: activeProps
}
export type error = {
    [Element: string]: any
}

export type activeProps = {
    sendSubmit?: string,
    activateNuclear?: string,
    activatePurge?: string    
}
export type rootReducers ={
    userDataReducer?: userDataAction
    activeDataReducer?: activeDataAction
}
export type userDataAction = {
    type: string,
    payload: UserState
    orderpayload: order
}
export type activeDataAction = {
    type: string,
    payload: InitialStates
}

export type rootReducerr = {
    type: 'userData'|'activeData'
    action: actions
    
    
    
    userData?: UserState
    activeData?: InitialStates
}
export type actions = {
    type: string
    userDataPayload?: UserState
    activeDataPayload?: InitialStates
    orderData?: order
    ingrName?: string
    activeDataAdd?: [string, number, number]
}

