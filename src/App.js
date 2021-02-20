import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Player from "./Player";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="app_header">
            <Header />
          </div>
          <div className="app_body">
          <Sidebar />

          <Route path="/player">
              <Player/>
          </Route>
          <Route path="/">
              <Body />
          </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
