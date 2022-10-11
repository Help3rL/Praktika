import React from "react";
let hold = 1;
export default function control(props:any){
    const holdd = (action:string) => {
        if (action === 'Add' && hold < 100){
            hold++;
        }else if (action === 'Substract' && hold > 0){
            hold--;
        }else{
            console.log("MAX/MIN" + hold)
        }
        return undefined
    }
    const generator = (hen:any) =>{
        const tempHold = []
        for(const [key, value] of Object.entries(hen)){
            console.log(key + ' : ' + value)
            tempHold.push(
                <div key={key + value}>
                    <label htmlFor="buttons">{key} : {(Number(value)/100).toFixed(2)}</label>
                    <div id="buttons">
                        <button className="more" onClick={holdd('Add')}>More</button>
                        <button className="less" onClick={holdd('Substract')}>Less</button>
                    </div>
                    <input type="number" name="amount" id="" min={0} max={99} step={1} defaultValue={hold}/>
                </div>
                 )
        }
        return tempHold
    }

    return(
        <div className='control'>
            {generator(props.list)}
        </div>
    )
}