export type ingrData = {
    name: string,
    amount: number
}
type order = {
    ingrName: Array<ingrData>,
    orderCost: number,
    paid: boolean,
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
}