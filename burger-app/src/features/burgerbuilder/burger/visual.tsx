import React from "react";
import {ingrData} from '../../../types'
const visual = (props:any) => {
    function genIngr (ingr:Array<ingrData>){
        let temphold: JSX.Element[] = [];
        ingr.forEach(element => {
                for (let i = 0; i < element.amount; i++){
                temphold.push(<div className={element.name} key={Number((Math.random()*1000).toFixed() + Number(new Date())/12)}></div>)
            }
        });
        return temphold;
    }
    return (
        <div className="burgervisual">
            <div className="topbun">
                <div className="Seed1"></div>
                <div className="Seed2"></div>
            </div>
            <div className="ingredients">
                {genIngr(props.ingredients)}
            </div>
            <div className="bottombun"></div>
        </div>
    )
}
export default visual;