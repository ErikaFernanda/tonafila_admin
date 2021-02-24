
import './App.css';
import Body from './components/painelAdmin/body/Body';
import  Navbar  from './components/painelAdmin/navbar/Navbar';
import  Sidebar  from './components/painelAdmin/sidebar/Sidebar';
import MapContainer from './components/painelAdmin/views/MapContainer';
import { BrowserRouter } from "react-router-dom";
// import  MapContainer  from './components/MapContainer';


// import VerEmpresas from './components/VerEmpresas';

function App() {
  return (
   
     <div className="App">
        <Navbar />
        <div className="meio">
          <Sidebar />
          <BrowserRouter>
          
            <Body />
          </BrowserRouter>
          {/* <MapContainer/> */}
        </div>
      </div>

  );
}

export default App;
