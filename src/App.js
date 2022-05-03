import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
/* components */
import Header from './components/Header';
import Maps from './components/Maps';
import Home from './components/Home';
import Agents from './components/Agents';
import Weapons from './components/Weapons';
import CardDetails from './context/AgentPages';
import MapDetails from './context/MapPages';

function App() {

  return (
    
    <div className="App">
    <Router>
      <Header/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/maps' component={Maps}/>
      <Route exact path='/maps/:uuid' component={MapDetails}/>
      <Route exact path='/agents' component={Agents}/>
      <Route exact path='/agents/:uuid' component={CardDetails}/>
      <Route exact path='/weapons' component={Weapons}/>
      <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;