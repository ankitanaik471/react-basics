import React from "react";
import './Skills.css';
import Skill from "./skill/Skill";

import './Skills.css';

const Skills = (props) => {
    return (
        <div className="container">
            <h1 className='hero-main m-0 text-center'>My Skills</h1>
            <div className="d-sm-flex justify-content-between py-5">
                <Skill>
                    <span>
                        <i className="fa-brands fa-html5 fs-1" />
                    </span>
                    <hr />
                    <span>HTML</span>
                </Skill>
                <Skill>
                    <span>
                        <i className="fa-brands fa-bootstrap fs-1" />
                    </span>
                    <hr />
                    <span>BOOTSTRAP</span>
                </Skill>
                <Skill>
                    <span>
                        <i className="fa-solid fa-file-code fs-1" />
                    </span>
                    <hr />
                    <span>CSS</span>
                </Skill>
                <Skill>
                    <span className="App-logo-icon">
                        <i className="fa-brands fa-react fs-1" />
                    </span>
                    <hr />
                    <span>REACT JS</span>
                </Skill>
                <Skill>
                    <span>
                        <i className="fa-brands fa-angular fs-1" />
                    </span>
                    <hr />
                    <span>ANGULAR JS</span>
                </Skill>
                <Skill>
                    <span>
                        <i className="fa-brands fa-js fs-1" />
                    </span>
                    <hr />
                    <span>JAVASCRIPT</span>
                </Skill>
                <Skill>
                    <span>
                        <i className="fa-brands fa-node fs-1"></i>
                    </span>
                    <hr />
                    <span>NODE JS</span>
                </Skill>
            </div>
            
        </div>
        
    )
}

export default Skills;