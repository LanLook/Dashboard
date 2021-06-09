import React from 'react'
import TableCellNumber from './TableCellNumber'

export default function TableNumberStats(props){
    return (
        <div>
        <h3>{props.title}</h3>
        <div className='table'>
            {
                props.numberData.map(data => {
                    return <TableCellNumber data={data}/>
                })
            }
        </div>
        </div>
    )
}