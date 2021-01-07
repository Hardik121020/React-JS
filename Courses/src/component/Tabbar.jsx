import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Engineering from './Engineering';
import Arts from './Arts';
import COMMERCE from './COMMERCE';
import SCIENCE from './SCIENCE';
import SwipeableViews from 'react-swipeable-views';
import {useTheme } from '@material-ui/core/styles';
import './Text.css';



 function TabPanel(props)
 
 {
  const {children,value,index}=props;
   return(
     <div>
      {
        value===index && (<h5>{children}</h5>
        )
 }
     </div>
   )
 }
 
  

export default function Tabbar(){

  const theme = useTheme();
  
const handleChange = (event, newValue) => {
  console.warn(newValue)
  setValue(newValue);
};
const handleChangeIndex = (index) => {
    setValue(index);
  };

  
  const [newValue,setValue]=React.useState(0)
    
    return(
        <>
        <div className="container" id="tabbar">
            
                
      {/* <AppBar position="static" >
       */}
      <Tabs value={newValue} onChange={handleChange} aria-label="simple tabs example"  indicatorColor="primary"
        textColor="primary"   variant="scrollable"
        scrollButtons="on"
        >
          <Tab label="Engineering" />
          <Tab label="Arts/Humanities" />
          <Tab label="COMMERCE" />
          <Tab label="SCIENCE" />
        </Tabs>
      
{/*        
      </AppBar> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={newValue}
        onChangeIdex={handleChangeIndex}
      >
      <TabPanel value={newValue} index={0}> <Engineering /></TabPanel>
      <TabPanel value={newValue} index={1}> <Arts/></TabPanel>
      <TabPanel value={newValue} index={2}> <COMMERCE /></TabPanel>
      <TabPanel value={newValue} index={3}> <SCIENCE /></TabPanel>
      </SwipeableViews>
    

               
        </div>
         
        </>
    );
}