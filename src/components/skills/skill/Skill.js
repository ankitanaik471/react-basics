import React from "react";

// css
import './Skill.css';

const Skill = (props) => {
    
    return <div className="p-3 card text-center w-100 me-sm-2 mb-2 mb-sm-0">{ props.children }</div> ;
}

export default Skill;