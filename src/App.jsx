import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Header from './components/Header'
import Auth from './components/Auth'
import Add from './components/Add'
import Demo from './components/demo'

import SignUp from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import toast from 'react-hot-toast'




const App = () => {
  return (
    <>
     
      <div>

        <Header />
        
        {/* <Router> */}
          <Routes>
            <Route path="" element={<Demo/>}/>
            <Route path="/login" element={<Auth />} />
            <Route path="/Home" element={<div className=' relative w-full h-screen  bg-zinc-800'>
              <Background />
              <Foreground />
            </div>} />
            <Route path="/Add" element={<Add />} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        {/* </Router> */}
      </div>
    </>
  )
}

export default App