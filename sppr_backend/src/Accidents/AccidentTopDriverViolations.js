import React, {useEffect} from 'react'
import jQuery from 'jquery'
import GraphItem from '../GraphItem';

export default function AccidentTopDriverViolations() {
    const [datas, setData] = React.useState([]);

    useEffect(() => {
        fetch("http://web-schedule.zapto.org:8100/api/v1/dtp/stat/driver/violations/top?count=5")
        .then(responce => responce.json())
        .then(result =>setData(result))
    }, []);

    return(
        <div>
            <GraphItem 
                data={
                    jQuery.map(datas, function(n, i) {
                        return n.count;
                    })}
                labels={
                    jQuery.map(datas, function(n, i) {
                        return n.name;
                    })}
                type={'polarArea'}
                title={'Диаграмма вины водителей'}
            />
        </div>
    )
}