import { Box, Button, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import "./notification.css"
import React from 'react'





const Search = styled('div')(() => ({
    position: 'relative',
    borderRadius:100,
    width:450,
    backgroundColor:"white",
    marginLeft:20
  }));
  const SearchIconWrapper = styled('div')(() => ({
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    marginLeft:20,
  }));
  const StyledInputBase = styled(InputBase)(() => ({
    color: 'inherit',
      marginLeft: -50,
  }));

const Notification = () => {
    return (
        <Box display="flex" flexDirection="row" style={{ height:500}}>
           
                <Box style={{width:"50%",height:390,backgroundColor:grey[200],margin:10,borderRadius:15}}>
                    <Box display="flex" flexDirection="row" style={{height:50,backgroundColor:yellow[900],borderTopRightRadius:15,borderTopLeftRadius:15}}>
                            <Box ><EmailIcon style={{height:25, width:25, marginTop:12, marginLeft:15}}/></Box>
                            <Typography style={{fontWeight:"bold", marginLeft:10, marginTop:12}}>Send Notfication To Any User</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <Box></Box>
                        <Box style={{height:40,width:200, backgroundColor:yellow[900],marginTop:10, borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Typography style={{marginTop:7}}>Selected User (2)</Typography>
                        </Box>
                    </Box>

                    <Box style={{marginTop:30}}>
                                <form class="notification-controle">
                                    <label >
                                        <input type="text" placeholder='Title' />
                                    </label>
                                </form>
                                <form class="notification-controle2">
                                    <label >
                                        <input type="Message" placeholder='Message'/>
                                    </label>
                                </form>

                               <Button style={{width:140,backgroundColor:yellow[900],color:"black", marginLeft:295,marginTop:15}}>Submit</Button>
                                
                        </Box>
                </Box>
                <Box style={{width:"50%",backgroundColor:grey[200],margin:10,borderRadius:15}}>

                    <Box display="flex" flexDirection="column">
                        <Box display="flex" flexDirection="column" style={{height:100,width:"100%",backgroundColor:yellow[900], borderTopRightRadius:15,borderTopLeftRadius:15}}>
                            <Box display="flex" flexDirection="row" style={{height:50}}>
                                <Box ><GroupIcon style={{height:20, width:20, marginTop:13, marginLeft:15}}/></Box>
                                <Typography style={{fontWeight:"bold", marginLeft:10, marginTop:12}}>Total User (2000)</Typography>
                            </Box>
                            <Box>
                                <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search with email / name"
                                    inputProps={{ 'aria-label': 'search' }}
                                    
                                />
                                </Search>        
                            </Box>
                        </Box>
                        <Box style={{height:0}}></Box>
                    </Box>
                   
                </Box>
        </Box>
    )
}

export default Notification;
