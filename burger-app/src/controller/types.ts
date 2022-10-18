import { User } from "firebase/auth"

export type ingrData = {
    name: string,
    amount: number
}
export type order = {
    ingrName: Array<ingrData>,
    orderCost: number,
    paid: boolean,
    id: number,
    amount: number,
    date: Date
}

type InitialStates = {
    loading: boolean;
    ingr: Array<ingrData>
    totalPrice: number;
    error: boolean;
    building: boolean;
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
    userLogState: boolean
}
export type props = {
    ingr: Array<ingrData>,
    [Element: string]: any,
    config: object,
    orderData: object
}
export type Data = {
    orderData?: Array<order>
    userData?: UserState
    activeData?: InitialStates
}