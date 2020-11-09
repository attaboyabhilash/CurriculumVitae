import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import RHD from '../assets/ResumeHeaderDark.svg'
import RHL from '../assets/ResumeHeaderLight.svg'

function ResumeHeader() {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className="resume-header">
            {darkMode ? 
                <img src={RHD} alt="rhd" /> 
                : 
                <img src={RHL} alt="rhl" />
            }
        </div>
    )
}

export default ResumeHeader
