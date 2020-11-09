import React, { useContext } from 'react'
import Header from './components/Header'
import ResumeHeader from './components/ResumeHeader'
import ResumeContent from './components/ResumeContent'
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
      <>
      <div className={darkMode ? "dark-mode container" : "light-mode container"}>
        <Header/>
        <ResumeHeader />
        <ResumeContent />
      </div>
      <Footer />
      </>
  )
}

export default App
