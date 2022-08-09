import React from 'react'

export default function MiddlePane({data}: any) {
  return (
    <>
        <div className='pw-table__middle-pane--middle-header'>Sport</div>
        {data.map((item: any, index: number) => {
            return (
                <div key={index} className='pw-table__middle-pane--middle-cell'>{item.sport}</div>
            )
        })}
    </>
  )
}
