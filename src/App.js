
import './App.css';
import {Excel} from './Componenets/Excel';
import Export from './Componenets/Export';
import QRCode from './Componenets/QRCode';
import Pdf from './Componenets/Pdf';
import Email from './Componenets/Email';
import Mui from './Componenets/Mui';
import UseReducer from './Componenets/UseReducer';

function App() {
  /*const fileName="TechnicalAdda";
  const viewer=[
    {id:1,name:'Yogita'},
    {id:2,name:'Sonpitale'}
    /* <Excel csvData={viewer} fileName={fileName}/>
  ]*/
  return (
    <div className="App">
    {/* <Export/>
    <QRCode />
    <Pdf />
    <Email />
  <Mui/>*/}
     <UseReducer/>
    </div>
  );
}

export default App;
