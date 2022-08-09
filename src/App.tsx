import React from 'react';

import {MiddlePinnedTable} from './MiddlePinnedTable';

import {total} from './data'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './App.scss';

function App() {
  const {firstTableData, middlePane, secondTableData} = total;
  
  return (
    <div className="App">
      <MiddlePinnedTable 
        firstTableData={firstTableData}
        middlePane={middlePane}
        secondTableData={secondTableData}
        itemEachPage={5}
        pageLength={firstTableData.length} 
      />
    </div>
  );
}

export default App;
