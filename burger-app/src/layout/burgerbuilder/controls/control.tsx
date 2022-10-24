import React from "react";
import { InitialStates, StaticIngrData } from '../../../controller/types'
let hold = 1;
export default function control(props:InitialStates){
    const holdd = (action:string) => {
        if (action === 'Add' && hold < 100){
            hold++;
        }else if (action === 'Substract' && hold > 0){
            hold--;
        }else{
            console.debug("MAX/MIN" + hold)
        }
        return undefined
    }
    
    const generator = (hen:StaticIngrData) =>{
        console.debug(hen)
        const tempHold = []
        for(const [key, value] of Object.entries(hen)){
            tempHold.push(
                <div key={key + value} className="controlContainer">
                    <label htmlFor="buttons" className="Label">{key}:{(Number(value[1])/100).toFixed(2)}</label>
                    <div id="buttons">
                        <button className="More" onClick={holdd('Add')}>More</button>
                        <button className="Less" onClick={holdd('Substract')}>Less</button>
                    </div>
                    {/* <input type="number" name="amount" id="" min={0} max={99} step={1} defaultValue={hold}/> */}
                </div>
                 )
        }
        return tempHold
    }

    return(
        <div className='BuildControl'>
            {generator(props.ingr)}
        </div>
    )
}
