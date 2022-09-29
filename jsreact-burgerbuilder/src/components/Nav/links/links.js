import React from "react";
const list = (props) => {
    const list = Object.keys(props.links).map(e => {return <li key={e}><a href={props.links[e]}>{e}</a></li>})
    return(list)
};  
export default list;
