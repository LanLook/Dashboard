import { data } from 'jquery';
import React, {useEffect} from 'react'
import SingleTextLabel from '../RootItems/SingleTextLabel';

export default function AccidentsSinglePassengerStats() {
    const [datas, setData] = React.useState([]);

    useEffect(() => {
        fetch("http://web-schedule.zapto.org:8100/api/v1/dtp/stat/passenger/violations/count")
        .then(responce => responce.json())
        .then(result =>setData(result))
    }, []);

    return(
        
        <div>
        {
            datas != null &&
            <SingleTextLabel title={'Количество дтп по вине пешехода'} number={datas}/>
        }
            
        </div>
    )
}