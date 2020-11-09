import React, { useContext } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { ThemeContext } from '../context/ThemeContext'

const Toggle = () => {
    const { darkMode, toggleMode } = useContext(ThemeContext)

    return (
        <div className="toggles">
            <label>
                <input className='toggle-checkbox' type='checkbox' checked={darkMode} onChange={toggleMode}></input>
                <div className='toggle-slot'>
                    <div className='sun-icon-wrapper'>
                        <FiSun className="iconify sun-icon" />
                    </div>
                    <div className='toggle-button'></div>
                    <div className='moon-icon-wrapper'>
                        <FiMoon className="iconify moon-icon"/>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Toggle

