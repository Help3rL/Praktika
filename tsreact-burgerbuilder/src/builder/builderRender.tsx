import React from 'react';
import Builder from './builderMaster';
import Ingredients, {ingredients} from './ingredients/ingredients';
import Controller from './controller/controller'
const renderBuilder = (props:any) =>{
    let Burger = props.data;
    const controller = new Controller(Burger);
    const builder = new Builder(controller.objectInfo);
    const ingredients = new Ingredients(builder.getIngredients);
    return (
        <div className='content'>
            {builder.Visual(ingredients.getDiv)}
            {controller.getController}
            {/* <ingredients/> */}
        </div>
    )
}
export default renderBuilder;