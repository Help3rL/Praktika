import React from 'react';
import Controls from './controls/controller'
import Visual from './burger/visual'
import './burger.css'
import { Data } from '../../controller/types';
const builder = (props:Data) =>{
    return(
        <div className='builder'>
            { props.activeData?.ingr !== undefined ? <Visual ingr={props.activeData.ingr} loading={false} totalPrice={0} error={false} building={false} buying={false}/> : null}
            <Controls activeData={props.activeData}/>
        </div>
    )
}
export default builder