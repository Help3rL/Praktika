import React, {Component} from 'react';
import imageLogo from '../../assets/images/logo.png';
class Toolbar extends Component {
    list;
    logo:string;
    file:string;
    assets = '../../assets'
    icon;
    constructor(file:string, list:object, logo:string, icon: string){
        super(file)
        this.file = file;
        this.list = list;
        this.logo = logo || imageLogo;
        this.icon = icon;
    }

    linksGen(obj:any){
        let temp = Object.keys(obj).map(e => {return <li key={e} data-test={e}><a href={obj[e]}>{e}</a></li>})
        return temp;
    }

    get getTest(){
        return(
            <nav>
                <div className='logo'><a href='/'><img className='logoImage' src={this.logo} alt='BurgerBuilder'/></a></div>
                <ul>
                    {this.linksGen(this.list)}
                </ul>
            </nav>
            )
    }


}


export default Toolbar;