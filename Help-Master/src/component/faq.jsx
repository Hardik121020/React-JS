import React, { useState } from 'react';
import Accordion from './Accordion'


const FAQ = () =>  {

    const [ active , setActive] = useState("");

    return (
        
      <div className="App1">
        <div className="col-md-4 cobox">
            <h1 id="text">FAQ</h1>    
        </div>
        <Accordion title="Title 1" content="Several early hominins used fire and occupied much of Eurasia. Early modern humans are thought to have diverged in Africa from an earlier hominin around 300,000 years ago, with the earliest fossil evidence of Homo sapiens also appearing around 300,000 years ago in Africa.[5] Humans began to exhibit evidence of behavioral modernity at least by about 100,000–70,000 years ago (and possibly earlier).[6][7][8][9][10] In several waves of migration, H. sapiens ventured out of Africa and populated most of the world.[11][12] The spread of the large and increasing population of humans has profoundly affected the biosphere and millions of species worldwide. Among the key advantages that explain this evolutionary success is the presence of a larger, well-developed brain, which enables advanced abstract reasoning, language, problem solving, sociality, and culture through social learning. Humans use tools more frequently and effectively than any other animal: they are the only extant species to build fires, cook food, clothe themselves, and create and use numerous other technologies and arts." active={active} setActive={setActive}/>
        <Accordion title="Title 2" content="grjnjhfdber 2" active={active} setActive={setActive}/>
        <Accordion title="Title 3" content="grjnjhfdber 3" active={active} setActive={setActive}/>
        <Accordion title="Title 4" content="grjnjhfdber 4" active={active} setActive={setActive}/>
      </div>
    );
  }
  
export default FAQ;