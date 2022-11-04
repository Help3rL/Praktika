import React from 'react'

export const Component = (props:any) => {
    return(
        <div>
            <h1>React Hooks </h1>
            <div className='bordered'>{props.data}</div>
        </div>
    )
}

export default Component