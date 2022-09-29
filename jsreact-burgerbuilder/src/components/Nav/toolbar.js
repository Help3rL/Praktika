import React from "react";

const toolbar = (props) => {
    return(
        <nav>
            <div>
                {props.logo} Temp
            </div>
            <ul>
                {props.links}List
            </ul>
        </nav>
        )
}

export default toolbar;