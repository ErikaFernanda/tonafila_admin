
import './App.css';
import CadastrarEmpresa from './components/CadastrarEmpresa';
import  MapContainer  from './components/MapContainer';
import  Navbar  from './components/painelAdmin/navbar/Navbar';
import  Sidebar  from './components/painelAdmin/sidebar/Sidebar';
// import  MapContainer  from './components/MapContainer';


// import VerEmpresas from './components/VerEmpresas';

function App() {
  return (
   
     <div className="App">
        <Navbar />
        <div className="meio">
          <Sidebar />
          {/* <BrowserRouter>
          
            <Body />
          </BrowserRouter> */}
          <MapContainer/>
        </div>
      </div>

  );
}

export default App;
