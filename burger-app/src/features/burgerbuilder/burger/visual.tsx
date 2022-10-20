import React from "react";
import {StaticIngrData} from '../../../controller/types'
const visual = (props:any) => {
    function genIngr (ingr:Array<StaticIngrData>){
        let temphold: JSX.Element[] = [];
        ingr.forEach(element => {
                for (let i = 0; i < ingr.length; i++){
                temphold.push(<div className={String(element[0])} key={Number((Math.random()*1000).toFixed() + Number(new Date())/12)}></div>)
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