import React, {useEffect} from 'react'
import jQuery from 'jquery'
import SingleTextLabel from '../RootItems/SingleTextLabel';

export default function HousingAvgCareSingleLabel() {
    const [data, setData] = React.useState([]);
    
    useEffect(() => {
        fetch("http://web-schedule.zapto.org:8100/api/v1/building/stats/housing_availability/avg")
        .then(responce => responce.json())
        .then(result => setData(result))
    }, []);

    return(
        <div>
            <SingleTextLabel title={'Средняя обеспеченность в городе, 1кв.м. на 1 человека'} 
            number={data} />
        </div>
    )
}