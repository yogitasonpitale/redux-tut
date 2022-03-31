import React from 'react'
import { CSVLink } from 'react-csv';

const data=[
    {id:1,name:'Yogita', age:'29'},
    {id:2,name:'Sonpitale', age:'31'}
];
const headers =[
    {label:'Id',key:'id'},
    {label:'Name',key:'name'},
    {label:'Age',key:'age'},
];
const csvReport={
    filename:'Report.csv',
    headers : headers,
    data:data
}
function Export() {
  return (
    <div>
        <h1>Export</h1>
        <CSVLink {...csvReport}>Export to CSV</CSVLink>
    </div>
  )
}

export default Export