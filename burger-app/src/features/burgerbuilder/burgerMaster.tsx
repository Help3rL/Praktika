import React from 'react';
import Controls from './controls/controller'
const builder = (props:any) =>{
    console.log(props)
    return(
        <div className='builder'>
            <Controls/>
        </div>
    )
}
export default builder