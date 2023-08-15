import "./App.css";
import Navbar from "./component/navbar";
import Container from "./component/container";
import Footer from "./component/footer";
import Side from "./component/sideBar";

function App() {
  return (
    <div>
      
      <Navbar />
      <div className="grid grid-flow-col ">
       <div className="w-auto"><Side/> </div>
      <div><Container/></div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
