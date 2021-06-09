import React from 'react'

export default function TableCellNumber({data}){
    return (
        <div className='tableCell'>
            <h3>{data.descr}</h3>
            <h1>{data.num}</h1>
            <h4>{data.postfix}</h4>
        </div>
    )

}