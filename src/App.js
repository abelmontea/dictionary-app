import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <form>
        <div className="row justify-content-evenly">
          <div className="col">
            <input type="search" placeholder="Look up any word!" />
          </div>
          <div className="col">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
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
  );
}

export default App;
