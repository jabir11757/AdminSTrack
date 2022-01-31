import { AppBar, Avatar, Box, Toolbar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { IconButton } from '@mui/material';
import Logo from "../image/logo.svg"
import React,{useState} from 'react'


const Navbar = () => {

    
        
    // const [homepageVisibility,sethomepageVisibility] = useState(true);
    

    return (
     <Box>
         <AppBar style={{backgroundColor:"white",height:50}}>
             <Toolbar>
                <Box >
                    <img src={Logo} alt="logo" 
                         style={{ 
                             height: "40px", 
                             padding:5, 
                             marginTop:-10,
                             marginLeft:-15
                             }} 
                    />
                </Box>

                <IconButton style={{marginLeft:900,marginTop:-15}}>
                    <WidgetsIcon/>
                </IconButton>

                <IconButton style={{marginLeft:20,marginTop:-15}}>
                    <NotificationsIcon/>
                </IconButton>
               
                <IconButton style={{marginLeft:50,marginTop:-15}}>
                    <Avatar style={{height:30,width:30}}/>
                </IconButton>
                
             </Toolbar>
         </AppBar>
     </Box>   
    )
}

export default Navbar;
