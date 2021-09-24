import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";


function App() {
  return (
    <div>
      <Topbar/>
    <div className="containers">
    <Sidebar/>
   
    <div className="mainpage">
    <Home/>
    </div>
    
    </div>
    


    </div>
  );
}

export default App;
