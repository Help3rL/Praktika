import React, { Component } from 'react';
import './controller.scss'
export default class Controls extends Component{
    info:any;
    constructor(info:object = {}){
        super(info);
        this.info = info;
    }
    private control(){
        if (this.info['ingredients'] !== undefined){
            let list = Object.keys(this.info['ingredients']).map(value =>{
                return (
                    <div className={'ingr ' + value}>
                        <div className="ingrTitle">{value}<span className="price">({(this.info.ingredients[value] / 100).toFixed(2)}€)</span></div>
                        <div className='buttons'>
                        <button onClick={() => {
                            this.info.data.ingrArray.push(value)
                            console.log(this.info.data.ingrArray)
                        }} className='addMore'>More</button>

                        <button onClick={() => {
                            this.info.data.ingrArray = this.info.data.ingrArray.splice(this.info.data.ingrArray.indexOf(value, 1), 1);
                            console.log(this.info.data.ingrArray.indexOf(value, 1));
                            console.log(this.info.data.ingrArray);
                        }} className='addLess'>Less</button>
                        </div>
                    </div>)
            })
            return list;
            
        } else {
            console.error(this.info['ingredients'] + 'Not read in ' + this.info);
            return "FATAL Error couldn't find any ingredients!";
        }
    }
    private renderArray(){
        console.log(this.info.data.ingrArray)
        let temphold:any = []
        console.log(this.info.data.ingrArray.forEach((element:string, index:number) => temphold.push(<li key={index}className={element}>{element}</li>)));
        console.log(temphold)
        return temphold;
    }
    get objectInfo(){
        return this.info
    }
    get getController(){
        return (
        <div className='controller'>
            <div className="ingrList">
                <ul>
                    {this.renderArray()}
                </ul>
            </div>
            <div className="controls">
                {this.control()}
            </div>
        </div>)
    }
}