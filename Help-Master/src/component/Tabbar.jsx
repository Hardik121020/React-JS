import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ACCOUNT_PAYMENT from './Account&Payment';
import LEARNER from './learner';
import EDUCATOR from './Educator.jsx';
import INSTITUTE from './Institute';
import TOOLS from './Tools_Usage';
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
          <Tab label="Account & Payment" />
          <Tab label="Learner" />
          <Tab label="Educator" />
          <Tab label="Institute" />
          <Tab label="Tools" />
        </Tabs>
      
{/*        
      </AppBar> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={newValue}
        onChangeIdex={handleChangeIndex}
      >
      <TabPanel value={newValue} index={0}> <ACCOUNT_PAYMENT /></TabPanel>
      <TabPanel value={newValue} index={1}> <LEARNER /></TabPanel>
      <TabPanel value={newValue} index={2}> <EDUCATOR /></TabPanel>
      <TabPanel value={newValue} index={3}> <INSTITUTE /></TabPanel>
      <TabPanel value={newValue} index={4}> <TOOLS /></TabPanel>
      </SwipeableViews>
    

               
        </div>
         
        </>
    );
}
