Argument of type 'InitialStates' is not assignable to parameter of type 
SetStateAction<{
   loading: boolean; 
   ingr: {}[]; 
   totalPrice: number; 
   error: boolean; 
   building: boolean; 
   buying: boolean; }>
  Type 'InitialStates' is not assignable to type 
  { loading: boolean; 
    ingr: {}[]; 
    totalPrice: number; 
    error: boolean; 
    building: boolean; 
    buying: boolean; }'.
    Types of property 'ingr' are incompatible.
      Type 'StaticIngrData' is missing the following properties from type '{}[]': length, pop, push, concat, and 29 more.ts(2345)
