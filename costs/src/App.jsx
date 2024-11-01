import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    <Router>

      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/company'>
          <Company />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/newproject'>
          <NewProject />
        </Route>
      
      </Switch>
    
    </Router>
  )
}

export default App
