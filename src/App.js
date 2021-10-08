import './App.css';
import Home from './components/Home/home';
import Navbar from './components/navbar/navbar';
import About from './components/About/about'
import Service from './components/Service/service'
import Projects from './components/Projects/project'
import Contact from './components/Contact/contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path='/about'>
            <Navbar />
            <About />
          </Route>

          <Route path='/service'>
            <Navbar />
            <Service />
          </Route>

          <Route path='/projects'>
            <Navbar />
            <Projects />
          </Route>

          <Route path='/Contact'>
            <Navbar />
            <Contact />
          </Route>

          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App