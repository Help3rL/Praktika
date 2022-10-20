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
    userZip: number,
    userEmail: string,
    userOrders: Array<order>,
    userCity: string,
    userToken: string,
    userPhoneNumber: number,
    userlogoutTime: number,
    userLogState: boolean,
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
}
export type error = {
    [Element: string]: any
}