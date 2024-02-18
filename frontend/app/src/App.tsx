// import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import styles from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Input from './pages/Input'
import History from './pages/History'



function App(): JSX.Element{
  return (
    <>
      <div className={styles.backgraund}>
        <Sidebar></Sidebar>
        <div className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/input" element={<Input />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
