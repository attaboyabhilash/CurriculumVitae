import React, { useState, useEffect, createContext } from 'react'

export const ThemeContext = createContext()

const initialState = false || JSON.parse(localStorage.getItem('theme'))

function ThemeContextProvider(props) {
    const [darkMode, setDarkMode] = useState(initialState)
  
    const toggleMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(darkMode))
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
