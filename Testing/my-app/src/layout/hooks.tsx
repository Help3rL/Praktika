import React from 'react'
interface temp {
    data: number
}
export const Component = (props:temp) => {
    return(
        <div>
            <h1>React Hooks </h1>
            <div className='bordered'>{props.data}</div>
        </div>
    )
}

export default Component