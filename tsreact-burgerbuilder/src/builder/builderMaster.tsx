import React, {Component} from 'react';
import './ingredients.scss'
class Builder extends Component {
    // Controller = new Controls;
    type;
    private price;
    constructor(type:Object, price:Array<any> = []){
        super(type);
        this.type = type;
        this.price = price;
    }
    private priceCalculator(){
        let initialValue = 0;
        let hold = this.price.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)/100;
        return (hold.toFixed(2))
    }

    // fromData<T>(this: new () => T, data: any): T {
    //     return Object.assign(new this(), data);
    // }
    getIngredients(){
        
    }
    Visual(ingredients:any){
        return(
            <div>
                <div className='burger'>
                    <div className='top-bun'>
                        <div className="seed" id="han0"></div>
                        <div className="seed" id="han1"></div>
                        <div className="seed" id="han2"></div>
                        <div className="seed" id="han3"></div>
                        <div className="seed" id="han4"></div>
                        <div className="seed" id="han5"></div>
                        <div className="seed" id="han6"></div>
                        <div className="seed" id="han7"></div>
                        <div className="seed" id="han8"></div>
                        <div className="seed" id="han9"></div>
                        <div className="seed" id="han10"></div>
                        <div className="seed" id="han11"></div>
                        <div className="seed" id="han12"></div>
                        <div className="seed" id="han13"></div>
                        <div className="seed" id="han14"></div>
                    </div>
                        {ingredients}
                    <div className='bottom-bun'></div>
                </div>
                <div>
                    Price: {this.priceCalculator()}€
                </div>
            </div>
        )
    }
}
export default Builder;