import "./App.css";
import MainCard from "./components/main-card";

function App() {
  return (
    <div className="App">
      <div className="center-align">
        <div className="row">
          <div className="col m12 xl10 offset-xl1">
            <div className="row">
              <p
                className="col s12 teal-text text-darken-2"
                style={{ letterSpacing: "8px" }}
              >
                SPLI
                <br />
                TTER
              </p>
              <MainCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
