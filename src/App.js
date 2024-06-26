
import './App.css';
import Body from './components/painelAdmin/body/Body';
import Navbar from './components/painelAdmin/navbar/Navbar';
import Sidebar from './components/painelAdmin/sidebar/Sidebar';
import { BrowserRouter } from "react-router-dom";




function App() {
  return (

    <div className="App">
      <Navbar />
      <div className="meio">
        <Sidebar />
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
