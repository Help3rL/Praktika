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

export type database = {
    userId: string,
    name: string,
    email: string,
    imageUrl: string,
    orders: Array<order>
}

export type InitialStates = {
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
    userState: boolean
}
export type props = {
    ingr: Array<ingrData>,
    [Element: string]: any,
    config: object,
    orderData: object
}
export type orderData = {
    orderData: Array<order>
}