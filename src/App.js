import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

/* components start */
import Header from "./components/Header";
import Maps from "./components/Maps";
import Home from "./components/Home";
import Agents from "./components/Agents";
import Weapons from "./components/Weapons";
import CardDetails from "./context/AgentPages";
import MapDetails from "./context/MapPages";
/* components end */

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <ReactLoading
          type={"spin"}
          color={"#FFFF"}
          height={"100px"}
          width={"100px"}
        />
      ) : (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/maps" component={Maps} />
            <Route exact path="/maps/:uuid" component={MapDetails} />
            <Route exact path="/agents" component={Agents} />
            <Route exact path="/agents/:uuid" component={CardDetails} />
            <Route exact path="/weapons" component={Weapons} />
            <Redirect to="/" />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
