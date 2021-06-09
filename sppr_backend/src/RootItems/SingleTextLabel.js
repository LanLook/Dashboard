import React, {useEffect} from 'react'
import jQuery from 'jquery'

export default function SingleTextLabel({title, number}) {      
    return(
        <div className='singleTextLabel'>
            <h2>{title}</h2>
            <h3>{number}</h3>
        </div>
    )
}