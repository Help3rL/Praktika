export interface UpdatedIngredientInterface {
    type ?: string
    ingredients?: any
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

export const updateObj = (oldObj:Array<any>, objUpdates:Array<any>) => {
    return({...oldObj, ...objUpdates});
}

export const checkValidity = (value:string , rules:any):boolean => {
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