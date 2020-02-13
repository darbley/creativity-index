import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../assets/scss/styles.scss';

import LanguageProvider from '../providers/LanguageProvider';


import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

import Navbar from '../components/Navbar/Navbar';


class App extends React.Component {
  render() {
    return (

        <React.Fragment>
          <LanguageProvider>
            <Router>
              <Switch>
                <Route exact path="/:lang" component={Home} />
                <Route exact path="/:lang/home" component={Home} />
                <Route exact path="/:lang/contact" component={Contact} />
                <Route exact path="/:lang/about" component={About} />
              </Switch>
            </Router>
          </LanguageProvider>
        </React.Fragment>
    )
  }
}
export default App;