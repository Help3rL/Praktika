import React from "react";
import "./layout.css";
import Aux from "../../hoc/auxs";
import Nav from "../Nav/toolbar"
const layout =(props)=>(
    <Aux>
        <main>
            <Nav/>
            {props.children}
        </main>
    </Aux>
);
export default layout;