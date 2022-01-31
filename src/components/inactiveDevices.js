import { Box, Typography, Grid, Card } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import React from 'react'
import { InactiveDevicesData } from './data';

const InactiveDevices = () => {
    return (
        <Box display="flex" flexDirection="row" >

           <Box display="flex" flexDirection="column" style={{margin:10, backgroundColor:grey[200]}}>
           
                <Box display="flex" flexDirection="row" style={{backgroundColor:yellow[900],borderRadius:5,width:"99%",marginLeft:10}}>
                    <Box ><CompassCalibrationIcon style={{height:20, width:20, marginTop:5, marginLeft:7}}/></Box>
                   
                        <Typography style={{fontWeight:"bold",marginLeft:10, marginTop:2}}>Groups</Typography>
                    
                </Box>

             <Box style={{marginLeft:20, margin:10}}>
             <Grid container columns={{ md: 12 }} columnSpacing={0} rowSpacing={4}>
                {InactiveDevicesData.map((item,index)=>{
                    return(
                        <Grid item md={3}>
                            <Card style={{height:110, width:220, backgroundColor:grey[200]}}>
                                        <Box display="flex" flexDirection="row" style={{height:"30%",width:"100%", backgroundColor:yellow[900]}}>
                                            <Box style={{margin:5}}>
                                                <Typography style={{fontWeight:"bold", marginLeft:5}}>{item.month}</Typography>
                                            </Box>

                                        </Box>
                                        <Card style={{height:"70%",width:"100%"}}>
                                            <Typography variant='h6' style={{fontWeight: 'bold',marginTop:10}}>{item.devices}</Typography>
                                            <Typography varianr='body2'>{item.device_title}</Typography>
                                        </Card>
                                    </Card>
                        </Grid>
                    )
                })}
            
            </Grid>
             </Box>
           </Box>
        </Box>
    )
}

export default InactiveDevices;
