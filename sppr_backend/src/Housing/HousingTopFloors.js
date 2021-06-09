import React, {useEffect} from 'react'
import GraphItem from '../GraphItem'
import jQuery, { data } from 'jquery'

export default function HousingTopFloors() {
    const [datas, setData] = React.useState([]);
    useEffect(() => {
        fetch("http://web-schedule.zapto.org:8100/api/v1/building/floor/count")
        .then(responce => responce.json())
        .then(result =>setData(result))
    }, []);


    return(
        <div>
            {
                datas.length > 0 &&
                <GraphItem data={
                   jQuery.map(datas.sort((a, b) => b.count - a.count)
                   .slice(0, 6)
                   .sort((a, b) => a.floor - b.floor),
                   function(n, i) {
                       return n.count;
                   })
                } 
                    type={'bar'}
                    labels={
                        jQuery.map(datas.sort((a, b) => b.count - a.count)
                        .slice(0, 6)
                        .sort((a, b) => a.floor - b.floor),
                            function(n, i) {
                                if(n.floor != null) return n.floor + '-х этажный дом';
                   })}
                   title={'Распределение количества домов-многоэтажек'}
                />
            }
        </div>
    );

}