import React from 'react'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Forgetpassword from './components/Forgetpassword.jsx'
import Resetpassword from './components/Resetpassword.jsx'


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

<Route path='/signup' element={<Signup/>}/>

<Route path='/signin' element={<Login/>}/>



<Route path='/forget-password' element={<Forgetpassword/>}/>

<Route path='/reset-password' element={<Resetpassword/>}/>

<Route path='*' element={<Login/>}/>

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App