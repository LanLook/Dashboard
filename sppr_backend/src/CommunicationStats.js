import React from 'react'

export default function CommunicationStats({active}) {
    const classes = []
    if(!active){
        classes.push("deactive")
    }
    return(
        <div className={classes.join(' ')}>
            communications
        </div>
    )
}