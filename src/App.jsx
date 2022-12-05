import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppRoute from '../routes'
import { AuthProvider } from '../contexts/authContext'



function App() {
 

  return (
    <div className="App">
      <AuthProvider> 
       <AppRoute/>
      </AuthProvider>
    </div>
  )
}

export default App
