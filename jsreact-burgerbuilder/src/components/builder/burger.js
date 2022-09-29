import React from 'react';
import Ingredients from './ingredients';

const burger = (props) => {
    let transIngr = Object.keys(props.ingredients).map(
        igKey => {
            return [
                ...Array(props.ingredients[igKey])
            ].map((_, i) => { 
        return <Ingredients key={igKey + i} type={igKey}/>;
            })
        }
    ).reduce((arr,el) => {
        return arr.concat(el)
    }, []);
    if (transIngr === 0){
        transIngr = "Add stuff!";
    }
    return(
        <div className='burger-show'>
            <Ingredients type="brd-top" />
             {transIngr}
            <Ingredients type="brd-bottom" />
        </div>
    );
};
export default burger;