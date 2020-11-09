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
                <img src={RHL} alt="rhl" 
                    style={{borderLeft: "1px solid #121212", borderRight: "1px solid #121212"}}
                />
            }
        </div>
    )
}

export default ResumeHeader
