import React, { useState, useEffect } from 'react'
import Header from './components/Header'

const initialState = false || JSON.parse(localStorage.getItem('theme'))

const App = () => {
  const [darkMode, setDarkMode] = useState(initialState)
  
  const toggleMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode))
  }, [darkMode])


  return (
    <div className={darkMode ? "dark-mode container" : "light-mode container"}>
      <Header toggleMode={toggleMode}/>
    </div>
  )
}

export default App
