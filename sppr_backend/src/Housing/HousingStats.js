import React from 'react'
import HousingAlarmChart from './HousingAlarmChart'
import HousingAvgCareSingleLabel from './HousingAvgCareSingleLabel'
import HousingNumberTable from './HousingNumberTable'
import HousingRepairChart from './HousingRepairChart'
import HousingTopFloors from './HousingTopFloors'
import HousingYearBuildingChart from './HousingYearBuildingChart'


export default function HousingStats() {
    
    return(
        <div>
            <HousingAlarmChart />
            <HousingRepairChart />
            <HousingAvgCareSingleLabel />
            <HousingNumberTable />
            <HousingTopFloors />
            <HousingYearBuildingChart />
        </div>
    ) 
}

  