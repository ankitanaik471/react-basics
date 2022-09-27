import React from "react";

// css
import './Skill.css';

const Skill = (props) => {
    
    return <div className="p-3 card text-center w-100 me-2">{ props.children }</div> ;
}

export default Skill;