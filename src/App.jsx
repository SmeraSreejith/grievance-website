import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import GrievanceSubmission from './pages/GrievanceSubmission'
import Auth from './pages/Auth'
import Chatbot from './components/Chatbot'



function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/grievance' element={<GrievanceSubmission/>}/>
      <Route path='/signin' element={<Auth login/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/chatbot' element={<Chatbot/>}/>
      </Routes> 
    </>
  )
}

export default App
