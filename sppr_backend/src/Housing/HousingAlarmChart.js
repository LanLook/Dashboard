import React, {useEffect} from 'react'
import GraphItem from '../GraphItem'
import jQuery from 'jquery'

export default function HousingAlarmChart() {
  const [datas, setData] = React.useState([]);
  useEffect(() => {
      fetch("http://web-schedule.zapto.org:8100/api/v1/building/emergency/count")
      .then(responce => responce.json())
      .then(result =>setData(result))
  }, []);
    

  return(
  <GraphItem data={
      jQuery.map(datas, function(n, i) {
          return n.count;
  })} type={'doughnut'} labels={['Не является аварийным', 'Аварийное жилое имущество']} 
  title={"Распределение количества аварийных домов"} />);
}