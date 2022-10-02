import React, { Component } from 'react';
export default class Controls extends Component{
    info:any;
    managment:any;
    constructor(info:object = {}, managment:any = undefined){
        super(info);
        this.info = info;
        this.managment = managment;
    }

    control(){
        if (this.info['ingredients'] !== undefined){
            let temp:any = {

            };
            let list = Object.keys(this.info['ingredients']).map(value =>{
                return (
                    <div className={'ingr' + this.info['ingredients'].value}>
                        <div className="ingrTitle">{value} tst<span className="price">{(this.info.ingredients[value] / 100).toFixed(2)}tet</span></div>
                        <button onClick={temp} className='addMore'>More</button>
                        <button onClick={temp} className='addLess'>Less</button>
                    </div>)
            })
            console.log(list);
            return list;
            
        } else {
            console.error(this.info['ingredients'] + 'Not read in ' + this.info);
            return "FATAL Error couldn't find any ingredients!";
        }
    }

    get getController(){
        return <div>{this.control()}</div>
    }
}