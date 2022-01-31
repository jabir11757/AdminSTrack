import { Box, Button, Typography,Card, Link } from '@mui/material';
import { blue, grey, yellow } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import Car from "../image/car.png"
import Google from "../image/google.png"
import React from 'react'
import "./lonInPanel.css"

const LogInPanel = () => {
    return (
        <Box display="flex" flexDirection="row" style={{margin:50 ,borderRadius:10,backgroundColor:grey[200],width:800  }}>
            <Box display="flex" flexDirection="column" style={{width:"35%",height:475, backgroundColor:yellow[900],borderRadius:10}}>
                
                <Box>
                    <Typography variant='h5' style={{fontWeight:"bold", margin:20}}>Welcome Back To </Typography>
                    <Typography variant='h5' style={{fontWeight:"bold",marginTop:-20,marginLeft:-38}}>Sultan Tracker</Typography>
                    <Box style={{width:120,height:4, backgroundColor:"black", borderRadius:10, marginLeft:40,marginTop:20}}/>
                    <Typography style={{ marginTop:50, marginLeft:-30}}>Sign in to continue your </Typography>
                    <Typography style={{ marginTop:-2, marginLeft:-140}}>account</Typography>
                </Box>

                <Box>
                    <img style={{height:150,width:250,marginTop:70, marginLeft:20}} src={Car} alt='car'/>
               </Box>
            </Box>
            
            <Box style={{width:"65%",backgroundColor:grey[0], borderRadius:10}}>
                <Box style={{marginTop:35}}>
                    <Typography style={{marginLeft:-105, marginBottom:15}}>Please sign in with your email & password</Typography>
                    <form class="controle">
                        <label >
                            <input type="text" placeholder='Email'/>
                        </label>
                    </form>
                    <form class="controle">
                        <label >
                            <input type="text" placeholder='Password'/>
                        </label>
                    </form>


                    <FormGroup>
                        <FormControlLabel style={{marginLeft:43}} control={<Checkbox/>} label="Keep me signed in until I signed out"/>
                    </FormGroup>

                    <Button style={{height:30,width:410, backgroundColor:yellow[900], color:"black", marginTop:10}}>sign in</Button>
                    <Typography style={{textAlign:"start", marginLeft:55, marginTop:10, color:"red"}}>Forgot password</Typography>
                    <Divider style={{width:410, marginLeft:55, marginTop:10}}>or</Divider>

                    <Box display="flex" flexDirection="row" justifyContent="space-between" style={{width:410,marginLeft:52,backgroundColor:grey[300], marginTop:25}}>
                        <FacebookIcon style={{color:blue[900], marginLeft:10}}/>
                        <Typography flexGrow={1} >Continue with Facebook</Typography>
                    </Box>
                    <Link>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" style={{width:410,marginLeft:52,backgroundColor:grey[300],marginTop:10}}>
                        <img src={Google} alt='google' style={{color:blue[900], marginLeft:10,marginTop:2, height:20,width:20}}/>
                        <Typography flexGrow={1} >Continue with Google</Typography>
                    </Box>
                    </Link>

                    <Box display="flex" flexDirection="row" style={{marginLeft:52, marginTop:20}}>
                        <Typography>Don't have any account?</Typography>
                        <Typography style={{color:yellow[900], marginLeft:10}}>Register</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LogInPanel;
