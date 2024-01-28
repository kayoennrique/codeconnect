import "./App.css";
import ResearchBar from "./components/ResearchBar";
import Filter from "./components/Filter";
import Ordering from "./components/Ordering";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <ResearchBar />
        <Filter />
        <Ordering />
      </div>
    </div>
  );
}

export default App;
