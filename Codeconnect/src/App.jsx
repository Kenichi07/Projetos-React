import "./App.css";
import Sidebar from "./componentes/Sidebar";
import BarraDePesquisa from "./componentes/BarraDePesquisa";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <BarraDePesquisa />
    </div>
  );
}

export default App;
