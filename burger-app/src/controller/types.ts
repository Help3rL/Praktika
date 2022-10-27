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
  };

export interface UserState{
    userName: string,
    userSurname: string,
    userAddress: string,
    userZip?: number,
    userEmail: string,
    userOrders: Array<order>,
    userCity?: string,
    userToken: string,
    userPhoneNumber?: number,
    userlogoutTime: number,
    userLogState?: 'logedin'|'logout'|'neverseen'|boolean,
    uid: string
}
export type props = {
    ingr: StaticIngrData,
    [Element: string]: any,
    config: object,
    orderData: object
}

export type StaticIngrData = {
    [Name:string]: Array<string|number>  
    // In structure| Ingredients: [Name, price, amount]   
}

export type Data = {
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