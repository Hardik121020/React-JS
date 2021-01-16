import React, { useState } from 'react';
import Accordion from './Accordion'


const FAQ = () =>  {

    const [ active , setActive] = useState("");

    return (
        
      <div className="App1">
        <div className="col-md-4 cobox">
            <h1 id="text">FAQ</h1>    
        </div>
        <Accordion title="Title 1" content="grjnjhfdber 1" active={active} setActive={setActive}/>
        <Accordion title="Title 2" content="grjnjhfdber 2" active={active} setActive={setActive}/>
        <Accordion title="Title 3" content="grjnjhfdber 3" active={active} setActive={setActive}/>
        <Accordion title="Title 4" content="grjnjhfdber 4" active={active} setActive={setActive}/>
      </div>
    );
  }
  
export default FAQ;