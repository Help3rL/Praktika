import React from "react";
export default function control(props:any){
    const input = () =>{
        return{
             
        }
    }
    return(
        <div className='control'>
            <label htmlFor="buttons">cost</label>
            <div id="buttons">
                <button className="more">More</button>
                <button className="less">Less</button>
            </div>
            <input type="number" name="amount" id="" min={0} max={99} step={1} defaultValue={1} readOnly={false}/>
        </div>
    )
}