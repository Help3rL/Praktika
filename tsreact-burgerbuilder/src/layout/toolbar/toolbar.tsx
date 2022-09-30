import React, {Component} from 'react';
import imageLogo from '../../assets/images/logo.png';
class Toolbar extends Component {
    list;
    logo:string;
    file:string;
    assets = '../../assets'
    constructor(file:string, list:object, logo:string){
        super(file)
        this.file = file;
        this.list = list;
        this.logo = logo || imageLogo;
    }

    linksGen(obj:any){
        let temp = Object.keys(obj).map(e => {return <li key={e}><a href={obj[e]}>{e}</a></li>})
        return temp;
    }

    get getTest(){
        return(
            <nav>
                <div className='logo'><a href='/'><img className='logoImage' src={this.logo} alt='BurgerBuilder'/></a></div>
                <ul>
                    {this.linksGen(this.list)}
                </ul>
                {/* <p>{this.iterate(this.list)}</p> */}
            </nav>
            )
    }


}


export default Toolbar;