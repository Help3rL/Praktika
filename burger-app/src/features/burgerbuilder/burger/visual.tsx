import { each } from "immer/dist/internal";
import React from "react";
import {ingrData} from '../../../types'
const visual = (props:any) => {
    function genIngr (ingr:Array<ingrData>){
        let temphold:any;
        ingr.forEach(element => {
            for (let i = 0; i < element.amount; i++){
                temphold += <div className={element.name}></div>
            }
        });
        return temphold;
    }
    return (
        <div className="burgervisual">
            <div className="topbun"></div>
            <div className="ingredients">
                {genIngr(props.ingredients)}
            </div>
            <div className="bottonbun"></div>
        </div>
    )
}

export default visual;