import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Company } from './components/pages/Company'
import { NewProject } from './components/pages/NewProject'
import { Container } from './components/layout/Container'

function App() {
 

  return (
    <Router>

      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      
      </div>
      
      <Routes >
        
        <Route  path='/' element={  <Container customClass='min-height'>  <Home /> </Container>  }>
        </Route>

        <Route  path='/company' element={<Container customClass='min-height'> <Company /> </Container> }>        
        </Route>

        <Route  path='/contact' element={<Container customClass='min-height'> <Contact /> </Container>}>
        </Route>

        <Route path='/newproject' element={ <Container customClass='min-height'> <NewProject /> </Container>}>       
        </Route>
      
      
      </Routes>
      <p>Footer</p>
    </Router>
    
  )
}

export default App
