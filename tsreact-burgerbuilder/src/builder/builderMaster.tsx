import React, {Component} from 'react';
class Builder extends Component {
    // Controller = new Controls;
    type;
    private price;
    constructor(type:Object, price:Array<any>){
        super(type);
        this.type = type;
        this.price = price;
    }
    private priceCalculator(){
        let initialValue = 0;
        let hold = this.price.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)/100;
        return (hold.toFixed(2))
    }
    get Visual(){
        return(
            <div>
                Price: {this.priceCalculator()}€
            </div>
        )
    }
}
export default Builder;