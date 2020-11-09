import React from 'react'
import '../app.css'
import Toggle from './Toggle'

function Header(props) {
    return (
        <nav>
            <h1>Curriculum Vitae</h1>
            <Toggle toggleMode={props.toggleMode}/>
        </nav>
    )
}

export default Header
