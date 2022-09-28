import React from "react";
import "./layout.css";
import Aux from "../../hoc/auxs";

const layout =(props)=>(
    <Aux>
        <div className="Content">
            Toolbar, Sidebar, backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);
export default layout;