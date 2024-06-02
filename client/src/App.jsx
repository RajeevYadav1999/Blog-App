import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import FooterL from './components/FooterL'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path = "/" element= {<Home/>}/>
    <Route path = "/about" element= {<About/>}/>
    <Route path = "/sign-in" element= {<SignIn/>}/>
    <Route path = "/sign-up" element= {<SignUp/>}/>
    <Route element={<PrivateRoute/>}>
     <Route path = "/dashboard" element= {<Dashboard/>}/>
    </Route>
    <Route path = "/projects" element= {<Projects/>}/>
    </Routes>
    <FooterL/>
    </BrowserRouter>
    
    </>
  )
}

export default App
