type ingrData = {
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
    ingr: any | null;
    totalPrice: number;
    error: boolean;
    building: boolean;
  };