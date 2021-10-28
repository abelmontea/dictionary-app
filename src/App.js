import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary />
        <div className="row">
          <div className="col">
            <h1>Mail</h1>
          </div>
          <div className="col">
            <bold>[meyl]</bold>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="descriptors">noun</div>
        </div>
      </div>
    </div>
  );
}

export default App;
