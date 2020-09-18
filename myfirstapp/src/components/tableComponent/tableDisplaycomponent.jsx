import React, { Component } from 'react'
class TableComponent extends Component{
    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
       // this.getRowsData = this.getRowsData.bind(this);
       this.getKeys = this.getKeys.bind(this);
}
getKeys = function(){
  // alert("data received :"+ JSON.stringify(this.props.dataSource))
   if(this.props.dataSource && this.props.dataSource.length>0)
    return Object.keys(this.props.dataSource[0]);
}

getHeader = function(){
    var keys = this.getKeys();
    //alert(keys);
    if(keys){
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
    })
    }
   
    
}

getRowsData = function(){
    var items = this.props.dataSource;
    var keys = this.getKeys();
    if(items && keys){
    return items.map((row, index)=>{
    return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
}
}

render() {
    return (
    <div className="container">
    <table className="table table-bordered table-striped">
    <thead>
    <tr>{this.getHeader()}</tr>
    </thead>
    <tbody>
    {this.getRowsData()}
    </tbody>
    </table>
    </div>
    
    );
    }
    

}
const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
    })
   }
export default TableComponent;

