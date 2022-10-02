import React, { Component } from 'react';
import './controller.scss'
export default class Controls extends Component{
    info:any;
    managment:any;
    constructor(info:object = {}, managment:any = undefined){
        super(info);
        this.info = info;
        this.managment = managment;
    }
    private control(){
        if (this.info['ingredients'] !== undefined){
            let temp:any = {

            };
            let list = Object.keys(this.info['ingredients']).map(value =>{
                return (
                    <div className={'ingr ' + value}>
                        <div className="ingrTitle">{value}<span className="price">({(this.info.ingredients[value] / 100).toFixed(2)}€)</span></div>
                        <button onClick={this.managment} className='addMore'>More</button>
                        <button onClick={temp} className='addLess'>Less</button>
                    </div>)
            })
            return list;
            
        } else {
            console.error(this.info['ingredients'] + 'Not read in ' + this.info);
            return "FATAL Error couldn't find any ingredients!";
        }
    }

    get getController(){
        return <div className='controller'>{this.control()}</div>
    }
}