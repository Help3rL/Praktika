import React from 'react'

export const Component = (props:any) => (
    <div>
        <button onClick={props.resetState}>Reset</button>
        <button onClick={props.addState}>Add 1</button>
        <button onClick={props.reduceState}>Reduce 1</button>
    </div>
)

export default Component