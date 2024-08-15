import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'

import AuthProvider, { useAuth } from './provider/authProvider.jsx'

import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import SignUp from './Pages/SignUp.jsx'
import SignIn from './Pages/SignIn.jsx'
import RecordVideo from './Pages/RecordVideo.jsx'
import TranslateText from './Pages/TranslateText.jsx'
import ValidateEntry from './Pages/ValidateEntry.jsx'
import ContributeText from './Pages/ContributeText.jsx';
import ContributeVideo from './Pages/ContributeVideo.jsx';

function App() {
  return (
    <AuthProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/record-video' element={<RecordVideo/>} />
        <Route path='/translate-text' element={<TranslateText/>} />
        <Route path='/validate-entry' element={<ValidateEntry/>} />
        <Route path='/contribute-text' element={<ContributeText/>} />
        <Route path='/contribute-video' element={<ContributeVideo/>} />
      </Routes>
    </AuthProvider>
  )
}

export default App