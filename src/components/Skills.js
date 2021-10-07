import React from 'react'
import "./Skills.css"
import Skill from './Skill'
import Interests from './interests'

function Skills() {
    return (
        <>
            <div className="skills">
                <h2 className="h2">Compétences</h2>
                <Skill title="HTML/CSS" rating="5" />
                <Skill title="PHP/symfony" rating="4" />
                <Skill title="Javascript" rating="3" />
                <Skill title="React" rating="2" />
                <Skill title="Node" rating="2" />
            </div>
             <div className="skills">
             <h2 className="h2">Langues</h2>
             <Skill title="Français" rating="5" />
                <Skill title="Anglais" rating="3" />
             </div>
            <Interests/>
        </>
    )
}

export default Skills
