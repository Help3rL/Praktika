import React from "react";
import {StaticIngrData} from '../../../controller/types'
import {InitialStates} from '../../../controller/types'
const visual = (props:InitialStates) => {

    const genIngr = (ingr:StaticIngrData) => {
        let temphold: JSX.Element[] = []
        
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
