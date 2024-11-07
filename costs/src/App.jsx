import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Company } from './components/pages/Company'
import { NewProject } from './components/pages/NewProject'
import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Projects } from './components/pages/Projects'


function App() {
 

  return (
    <Router>

     <Navbar />
      
      <Routes >
        
        <Route  path='/' element={  <Container customClass='min-height'>  <Home /> </Container>  }>
        </Route>

        <Route  path='/projects' element={<Container customClass='min-height'> <Projects /> </Container> }>        
          </Route>

        <Route  path='/company' element={<Container customClass='min-height'> <Company /> </Container> }>        
        </Route>

        <Route  path='/contact' element={<Container customClass='min-height'> <Contact /> </Container>}>
        </Route>

        <Route path='/newproject' element={ <Container customClass='min-height'> <NewProject /> </Container>}>       
        </Route>
      
      
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App
