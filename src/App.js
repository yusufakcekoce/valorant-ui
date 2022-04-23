import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
/* components */
import Header from './components/Header';
import Maps from './components/Maps';
import Home from './components/Home';
import Agents from './components/Agents';

function App() {

  return (
    
    <div className="App">
    <Router>
      <Header/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/maps' component={Maps}/>
      <Route exact path='/agents' component={Agents}/>
      <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;