import React from 'react';
import './Accordion.css'

const Accordion = ({ title , active , setActive , content}) => {
    return(
        <div className="accordion">
            <div className="accordionheading">
                <div className="container">
                    <p>{title}</p>
                    <span onClick={() => setActive(title)}>
                        {active === title ? "X" : "|||"}
                    </span>
                </div>
            </div>

            <div className={(active === title ? "show" : "") + " accordionContent"}>
                <div className="container">
                    <p>
                    {content}
                    </p>
                </div>
            </div>
            
        </div>
    )
}
export default Accordion;