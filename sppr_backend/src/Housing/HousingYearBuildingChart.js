import React, {useEffect} from 'react'
import jQuery from 'jquery'
import GraphItem from '../GraphItem';

export default function HousingYearBuildingChart() {
    const [data, setData] = React.useState([]);
    
    useEffect(() => {
        fetch("http://web-schedule.zapto.org:8100/api/v1/building/built_year/count")
        .then(responce => responce.json())
        .then(result => setData(result))
    }, []);


    return(
        <div>
        {
            data.length > 0 && 
            <GraphItem data = {jQuery.map(data, function(n, i) { if(n.built_year != null) return n.count;})}
                    type = {'line'}
                    labels = {jQuery.map(data, function(n, i) { if(n.built_year != null) return n.built_year;})}
                    title= {'Распределение количества построек по годам'}
            />
        }
        </div>
    );
}