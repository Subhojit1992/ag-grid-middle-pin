import React, {useState} from 'react'

import {AgGridReact} from 'ag-grid-react';

export default function TableLeft({data}: any) {

    const [columnDefs] = useState([
        {field: 'athlete' },
        {field: 'country' },
        {field: 'age'},
        {field: 'year'},
        {field: 'date'},
        {field: 'sport'},
        {field: 'gold'},
        {field: 'silver'},
        {field: 'bronze'},
        {field: 'total'},
    ]);

    return (
        <div className="ag-theme-alpine" style={{width: '100%', height: 400}}>
            <AgGridReact
                rowData={data}
                columnDefs={columnDefs}
            />
        </div>
    )
}
