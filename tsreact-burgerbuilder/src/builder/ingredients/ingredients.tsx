import React, {Component} from 'react';
export default class Ingredients extends Component{
    ingr:Array<string>;
    constructor(ingr:Array<string>){
        super(ingr)
        this.ingr = ingr
    }
    set ingredients(ingre:Array<string>){
        this.ingr = ingre;
    }
    private genList(){
        return this.ingr.map(function(name){
            return <div className={name}></div>
        })
    }
    get getDiv(){
        return(
            <div className='ingredients'>
                {this.genList()}
            </div>
        )
    }
}

export const ingredients = (props:any) => {
    let ingr = props.ingr;
    return (
        <div className='ingredients'>
            {genList(ingr)}
        </div>
    )
}

function genList(ingr:any) {
    return ingr.map(function(name: string | undefined){
        return <div className={name}></div>
    })
}