import React, {useEffect} from 'react'
import TableNumberStats from '../RootItems/TableNumberStats'

export default function HousingNumberTable() {
    const [archData, setArchData] = React.useState([]);
    
    useEffect(() => {
        fetch("http://web-schedule.zapto.org:8100/api/v1/building/stats/architectural")
        .then(responce => responce.json())
        .then(result => setArchData(result))
    }, []);

    return (
        <div>
        {
            archData.length > 0 &&
            <TableNumberStats numberData={[
            {
                descr: 'Общее количество зданий',
                num: archData[0].count_all_house
            },
            {
                descr: 'Количество архитектурных зданий',
                num: archData[0].count_architectural_house
            },
            {
                descr: 'Каждое',
                num: Math.floor(archData[0].count_all_house/archData[0].count_architectural_house),
                postfix: 'здание- архитектурное'
            }]}/>
        }
        </div>
    )
}