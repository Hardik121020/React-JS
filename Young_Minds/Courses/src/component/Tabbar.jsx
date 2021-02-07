import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SCIENCE from './SCIENCE';
import TECHNOLOGY from './Technology';
import ENGINEERING from './Engineering';
import ARTS from './Arts';
import MATHEMATICS from './Mathematics';
import ENTREPRENEURSHIP from './Entrepreneurship';
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
          <Tab label="Science" />
          <Tab label="Technology" />
          <Tab label="Engineering" />
          <Tab label="Arts/Humanities" />
          <Tab label="Mathematics" />
          <Tab label="Entrepreneurship" />
        </Tabs>
      
{/*        
      </AppBar> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={newValue}
        onChangeIdex={handleChangeIndex}
      >
      <TabPanel value={newValue} index={0}> <SCIENCE /></TabPanel>
      <TabPanel value={newValue} index={1}> <TECHNOLOGY /></TabPanel>
      <TabPanel value={newValue} index={2}> <ENGINEERING /></TabPanel>
      <TabPanel value={newValue} index={3}> <ARTS /></TabPanel>
      <TabPanel value={newValue} index={4}> <MATHEMATICS /></TabPanel>
      <TabPanel value={newValue} index={5}> <ENTREPRENEURSHIP /></TabPanel>
      </SwipeableViews>

        </div>
         
        </>
    );
}