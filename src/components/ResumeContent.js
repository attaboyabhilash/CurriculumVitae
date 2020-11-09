import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ResumeContent() {
    const { darkMode } = useContext(ThemeContext)
    return (
        <>
            <div className={ darkMode ? "resume-content-dark" : "resume-content-light" }>
                
            </div>
            <div className="download-resume">
                <span>Download {darkMode ? "Dark" : "Light"} Resume : </span>
                <a href={darkMode ? "../assets/Abhilash_CV_Dark.docx" : "../assets/Abhilash_CV_Light.docx"}download>
                    <button class="button-resume">Download</button>
                </a>
            </div>
        </>
    )
}

export default ResumeContent
