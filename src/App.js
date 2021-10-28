import './App.css';
import Greeter from './components/Greeter';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/p">
              <About />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
