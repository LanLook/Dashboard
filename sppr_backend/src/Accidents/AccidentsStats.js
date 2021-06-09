import React from 'react'
import AccidentsSingleDriverStats from './AccidentsSingleDriverStats'
import AccidentsSinglePassengerStats from './AccidentsSinglePassengerStats'
import AccidentTopDriverViolations from './AccidentTopDriverViolations'
import AccidentTopPassengerViolations from './AccidentTopPassengerViolations'
import AccidentsTopWeatherCount from './AccidentsTorWeatherCount'
import AccidentsTopLightCount from './AccidentsTorLightCount'
export default function AccidentsStats({active}) {
    const classes = []
    if(!active){
        classes.push("deactive")
    }
    return(
        <div className={classes.join(' ')}>
            <AccidentTopDriverViolations />
            <AccidentsSingleDriverStats />
            <AccidentsSinglePassengerStats />
            <AccidentTopPassengerViolations />
            <AccidentsTopWeatherCount />
            <AccidentsTopLightCount />
        </div>
    )
}