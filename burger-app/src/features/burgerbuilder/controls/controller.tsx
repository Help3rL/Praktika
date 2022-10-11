import React from "react";
import Control from './control'
export default function controller(props:any){
    return (
        <div>
            <Control list={props.ingr}/>
            <div></div>
        </div>
    )
}