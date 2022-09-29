import React from "react";
import Link from "./links/links"
import Logo from "../Layout/Logo/Logo";
const links = {
   home: '#home',
   builder: '#builder',
   account: '#account',
   orders: '#orders',
}
const toolbar = (props) => {
    return(
        <nav className='navigation'>
            <Logo/>
            <ul>
                <Link links={links}/>
            </ul>
        </nav>
        )
}

export default toolbar;