import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/Shared/NavBar'
import Home from './Components/Home/Home'
import Footer from './Components/Shared/Footer'
import SignIn from './Components/Login/SignIn'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<SignIn />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
