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

export const updateObject = (
  oldObject: any,
  updatedProperties: UpdatedIngredientInterface
) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};