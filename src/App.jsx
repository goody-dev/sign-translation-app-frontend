import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import SignUp from './Pages/SignUp.jsx'
import SignIn from './Pages/SignIn.jsx'
import RecordVideo from './Pages/RecordVideo.jsx'
import TranslateText from './Pages/TranslateText.jsx'
import ValidateEntry from './Pages/ValidateEntry.jsx'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/record-video' element={<RecordVideo/>} />
        <Route path='/translate-text' element={<TranslateText/>} />
        <Route path='/validate-entry' element={<ValidateEntry/>} />
      </Routes>
    </>
  )
}

export default App