import "./App.css";
import Search from "./Search";
import Header from "./Header";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="Weather">
      <Search />
      <Header />
      <Forecast />
    </div>
  );
}

export default App;
