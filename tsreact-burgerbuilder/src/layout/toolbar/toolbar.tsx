import React, {Component} from 'react';
class Toolbar extends Component {
    list;
    logo:string;
    Yaml = require('yaml');
    file:string;
    constructor(file:string, list:object, logo:string){
        super(file)
        this.file = file;
        this.list = list;
        this.logo = logo;
    }
    get getTest(){
        return('a')
    }


}


export default Toolbar;