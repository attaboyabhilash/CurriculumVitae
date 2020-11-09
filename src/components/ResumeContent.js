import React, { useContext } from 'react'
import ACVL from '../assets/Abhilash_CV_Light.docx'
import { ThemeContext } from '../context/ThemeContext'
import ContactInfo from './smaller-components/ContactInfo'
import SkillDetails from './smaller-components/SkillDetails'
import Projects from './smaller-components/Projects'

function ResumeContent() {
    const { darkMode } = useContext(ThemeContext)
    return (
        <>
            <div className={ darkMode ? "resume-content-dark resume" : "resume-content-light resume" }>
                <div>
                    <ContactInfo />
                    <SkillDetails />
                    <Projects />
                </div>
                <div>

                </div>
            </div>
            <div className="download-resume">
                <span>Download {darkMode ? "Dark" : "Light"} Resume : </span>
                <a href={darkMode ? "/assets/Abhilash_CV_Dark.docx" : ACVL}download>
                    <button class="button-resume" style={darkMode ?  {color: "#121212"} : {color : "#F4F4F4" }}>Download</button>
                </a>
            </div>
        </>
    )
}

export default ResumeContent
