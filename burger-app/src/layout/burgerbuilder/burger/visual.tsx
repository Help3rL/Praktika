import React from "react";
import {StaticIngrData} from '../../../controller/types'
import {InitialStates} from '../../../controller/types'
const visual = (props:InitialStates) => {

    const genIngr = (ingr:StaticIngrData) => {
        let temphold: JSX.Element[] = []
        ingr.keys.forEach(element => {
                for (let i = 0; i < ingr.keys.length; i++){
                temphold.push(<div className={String(ingr.element[0])} key={Number((Math.random()*1000).toFixed() + Number(new Date())/12)}></div>)
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
                {genIngr(props.ingr)}
            </div>
            <div className="bottombun"></div>
        </div>
    )
}
export default visual;
