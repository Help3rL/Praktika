import React from "react";
export default function control(props:any){
    const generator = (hen:Array<any>) =>{
        for (let [key , value] of hen){
            console.log(key + ':' + value)
        }
        return <a href="#">Test</a>
    }

    return(
        <div className='control'>
            <label htmlFor="buttons">cost{generator(props.list)}</label>
            <div id="buttons">
                <button className="more">More</button>
                <button className="less">Less</button>
                
            </div>
            <input type="number" name="amount" id="" min={0} max={99} step={1} defaultValue={1}/>
        </div>
    )
}