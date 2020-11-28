import React, {useContext} from 'react'
import StateProwider from './StateProwider'

const  Child =()=> {
    let stateprovider = useContext(StateProwider)
    console.log(stateprovider)
    return (
        <div>
            <h1>child value</h1>
        </div>
    )
}

export default Child
