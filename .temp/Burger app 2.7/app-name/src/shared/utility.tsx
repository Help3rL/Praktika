import { IngredientsType } from "../containers/BurgerBuilder/BurgerBuilder"
import { InitialStateInterface } from "../store/reducers/burgerBuilderReducer"
import { ValidationAuthInterface } from "../containers/Auth/Auth"


export interface UpdatedIngredientInterface {
    type ?: string
    ingredients?: IngredientsType
    error ?: boolean | null
    purchased ?: boolean
    loading ?: boolean
    orders ?: any[]
    id ?: number
    idToken?: any
    token ?: any
    userId ?: any
    building ?: boolean
    authRedirectPath ?: string
    path ?: string
    totalPrice ?: number
    valid ?: boolean
    value ?: string
    touched ?: boolean
}

export const updateObject = (oldObject:any, updatedProperties: UpdatedIngredientInterface) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value:string , rules:ValidationAuthInterface):boolean => {
    let isValid:boolean = true
    if(!rules){
        return true;
    }
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    }   
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
  
    return isValid
}