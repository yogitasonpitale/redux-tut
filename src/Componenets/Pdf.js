import React, { PureComponent } from 'react'
import jsPdf from 'jspdf';

export default class Pdf extends PureComponent{
 
    constructor(props){
     super(props)
     this.state={

     }
 }
  pdfGenerator =()=>{
      var doc= new jsPdf('p','pt');
      doc.text(20,20,'This is default text by yogita');
      doc.setFont('courier');
   
      doc.text(20,30,'this is text twith couries fornt');
      doc.save("generated.pdf");

      }
    render() {
    return (
      <div>
        <button onClick={this.pdfGenerator}>Generate PDF</button>
      </div>
    )
  }
}
