import React from "react";
import Skill from "./skill/Skill";

import './Skills.css';

const Skills = (props) => {
    return (
        <div className="container">
            <h1 className='hero-main m-0 text-center'>My Skills</h1>
            <div className="d-sm-flex justify-content-between py-5">
                <Skill>
                    <i className="fa-brands fa-html5 fs-1" />
                    <hr />
                    <span>HTML</span>
                </Skill>
                <Skill>
                    <i className="fa-brands fa-bootstrap fs-1" />
                    <hr />
                    <span>BOOTSTRAP</span>
                </Skill>
                <Skill>
                    <i className="fa-solid fa-file-code fs-1" />
                    <hr />
                    <span>CSS</span>
                </Skill>
                <Skill>
                    <i className="fa-brands fa-react fs-1" />
                    <hr />
                    <span>REACT JS</span>
                </Skill>
                <Skill>
                    <i className="fa-brands fa-angular fs-1" />
                    <hr />
                    <span>ANGULAR JS</span>
                </Skill>
                <Skill>
                    <i className="fa-brands fa-js fs-1" />
                    <hr />
                    <span>JAVASCRIPT</span>
                </Skill>
                <Skill>
                    <i className="fa-brands fa-node fs-1"></i>
                    <hr />
                    <span>NODE JS</span>
                </Skill>
            </div>
            
        </div>
        
    )
}

export default Skills;