export const updateObj = (oldObj:Array<any>, objUpdates:Array<any>) => {
    return({...oldObj, ...objUpdates});
}