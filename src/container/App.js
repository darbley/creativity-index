import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../assets/scss/styles.scss';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

import Navbar from '../components/Navbar/Navbar';


class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Router>
        </React.Fragment>
    )
  }
}
export default App;