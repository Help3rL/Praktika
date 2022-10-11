import React from 'react';
import Controls from './controls/controller'
const builder = (props:any) =>{
    return(
        <div className='builder'>
            <Controls ingr={props.config.builder.price}/>
        </div>
    )
}
export default builder