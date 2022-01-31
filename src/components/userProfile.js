import { Avatar, Box, Button, Card, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React from 'react'
import "./userProfile.css"

const UserProfile = () => {
    return (
        <Box display="flex" flexDirection="row" style={{margin:10}}>
           
                <Box display="flex" flexDirection="column" style={{margin:5,height:390,width:"50%", backgroundColor:grey[200]}}>
                    
                        <Box>
                            <Avatar style={{height:100,width:100,display:"inline-flex", margin:15, backgroundColor:yellow[900]}}/>
                            <Typography variant='h6' style={{fontWeight:"bold"}}>Sultan Tracker</Typography>
                        </Box>
                    
                    <Card style={{height:225,margin:10}}>

                        <Typography style={{margin:5, marginTop:20}}>Sultan Tracker VTS</Typography>
                        <Typography style={{margin:5}}>sultantracker.vts@gmail.com</Typography>
                        <Typography style={{margin:5}}>+8801313343311</Typography>
                        <Typography style={{margin:5}}>242/2, Shah Ali Bag, Mirpur-1</Typography>

                    </Card>
                </Box>


                <Box class="form" style={{margin:5,height:480,width:"50%", backgroundColor:grey[200]}}>
                    <Box display="flex" flexDirection="row" style={{margin:10,marginTop:20,borderRadius:5,backgroundColor:yellow[900]}}>
                        <Box><ManageAccountsIcon style={{height:22,width:22, margin:5}}/></Box>
                        <Box><Typography style={{fontWeight:"bold", margin:5, marginLeft:-2}}>Edit Profile</Typography></Box>
                    </Box>
                    <Box style={{marginLeft:0}}>
                    <form class="form-control">
                        <label >Name:
                            <input type="text" />
                        </label>
                    </form>
                    <form class="form-control">
                        <label >Email:
                            <input type="text" />
                        </label>
                    </form>
                    <form class="form-control">
                        <label >Contact:
                            <input type="text" />
                        </label>
                    </form>
                    <form class="form-control">
                        <label >Company/Organization:
                            <input type="text" />
                        </label>
                    </form>
                    <form class="form-control">
                        <label >Address:
                            <input type="text" />
                        </label>
                    </form>
                    </Box>

                    <Box justifyContent="space-between" display="flex" flexDirection="row" style={{marginLeft:40, marginTop:20}}>
                        <Box>
                            <Card style={{height:100,width:100,marginLeft:5}}></Card>
                        </Box>
                        <Box >
                            <Button style={{backgroundColor:yellow[900],color:"black", width:100,marginTop:60, marginRight:45}}>Submit</Button>
                        </Box>
                    </Box>

                </Box>
        </Box>
    )
}

export default UserProfile;
