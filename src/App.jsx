import "./App.css";
import MainContent from "./Components/MainContent/MainContent";
import SideBar from "./Components/Sidebar/SideBar";
function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <MainContent />
    </div>
  );
}

export default App;
