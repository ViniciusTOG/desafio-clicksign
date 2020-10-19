import React from 'react';
import {Home} from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from "./constants/routes"

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
