import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../assets/scss/styles.scss';

import Home from '../pages/Home/Home';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Router>
            <Switch location="">
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </React.Fragment>
    )
  }
}
export default App;