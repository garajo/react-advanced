import React from 'react';
import ReactDOM from 'react-dom';
import { ThemedTable } from './ThemedTable'
import {
  Header as HocHeader,
  RowCells as HocCells,
} from './Hoc'

const title = 'Trials in advanced React';

ReactDOM.render(
  (<div>
    {title}
    <ThemedTable 
      Header={ HocHeader } 
      headings={['id', 'name', 'value']} 
      RowCells={ HocCells } 
      values={
        [
          { id: 'fee', name: 'fee_name', value: 1},
          { id: 'fi', name: 'fi_name', value: 2},
          { id: 'fo', name: 'fo_name', value: 3},
          { id: 'fum', name: 'fum_name', value: 4},
        ]} 
    />
    
   {/*  <br />
    <br />
    
    <ThemedTable
      Header={ HocHeader } 
      headings={['id', 'name', 'value']} 
      values={
        [
          { id: 'fee', name: 'fee_name', value: 1},
          { id: 'fi', name: 'fi_name', value: 2},
          { id: 'fo', name: 'fo_name', value: 3},
          { id: 'fum', name: 'fum_name', value: 4},
        ]} 
    /> */}
  </div>),
  document.getElementById('app')
);

module.hot.accept();