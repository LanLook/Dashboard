import React from 'react'
import AccidentsStats from './Accidents/AccidentsStats'
import CommunicationStats from './CommunicationStats'
import DemographyStats from './Demography/DemographyStats'
import HousingStats from './Housing/HousingStats'
import { MainMap } from './RootItems/MainMap'

export default function Body(props) {
    
    let numStat = [{descr:'Количество домов', num:12}
                    ,{descr:'Количество домов', num:12}
                    ,{descr:'Количество домов', num:12}
                    ,{descr:'Количество домов', num:12}]
    

        return(
        <div className="bodyContent">
           <MainMap />
            {
                props.tabStates.demography &&
                <DemographyStats active={props.tabStates.demography} numberData={numStat}/> 
            }
            {
                props.tabStates.housing &&
                <HousingStats active={props.tabStates.housing}/>
            }
            {
                props.tabStates.communications &&
                <CommunicationStats active={props.tabStates.communications}/>
            }
            {
                props.tabStates.accidents &&
                <AccidentsStats active={props.tabStates.accidents}/>
            }
        </div>
    )
}