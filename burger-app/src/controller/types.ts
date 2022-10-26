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
    [Name:string]: [string, number, number?]
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


export type InitialStateInterface = {
    loading: boolean
    ingredients : IngredientsType | null 
    totalPrice: number
    error: boolean
    burgerBuilderReducer ?:any
    building: boolean
}
export interface IngredientsType {
    salad:number 
    bacon:number
    cheese:number 
    meat:number 
    [key:string] : number ; 
  }
  export interface UpdatedIngredientInterface {
    type?: string;
    ingredients?: IngredientsType;
    error?: boolean | null;
    purchased?: boolean;
    loading?: boolean;
    orders?: any[];
    id?: number;
    idToken?: any;
    token?: any;
    userId?: any;
    building?: boolean;
    authRedirectPath?: string;
    path?: string;
    totalPrice?: number;
    valid?: boolean;
    value?: string;
    touched?: boolean;
  }