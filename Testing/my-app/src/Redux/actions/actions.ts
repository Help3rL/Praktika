import * as actionTypes from './actionsTypes'
export function addint(int:number) {
    const action:any = {
        type: actionTypes.ADD_INT,
        int
    }
    return action
}
export function reduceInt(int:number){
    const action: any = {
        type: actionTypes.REDUCE_INT,
        int
    }
    return action
}
export function resetInt(int: number){
    const action:any = {
        type: actionTypes.RESEET_INT,
        int
    }
    return action
}