import React from 'react';
import Controls from './controls/controller'
import Visual from './burger/visual'
import './burger.css'
const builder = (props:any) =>{
    return(
        <div className='builder'>
            <Visual ingredients={props.config.ingredients}/>
            <Controls ingr={props.config.builder.price}/>
        </div>
    )
}
export default builder