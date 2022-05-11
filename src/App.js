import "./App.css";
import MainCard from "./components/main-card";

function App() {
  return (
    <div className="App valign-wrapper center-align">
      <div className="container center-align">
        <div className="row">
          <p className="col s12">
            SPLI
            <br />
            TTER
          </p>
          <MainCard />
        </div>
      </div>
    </div>
  );
}

export default App;
