import { Box, Typography, Grid, Card } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import React from 'react'
import { SideData, SideData2 } from './data';

const HomePage = () => {
    return (
        <Box display="flex" flexDirection="row" style={{marginTop:0}}>

            {/* <Box style={{width:"20%"}}></Box> */}


            <Box display="flex" flexDirection="column" >
            <Box  style={{height:"65%",  backgroundColor:grey[200],margin:10}}>
                <Box  display="flex" flexDirection="row" style={{backgroundColor:yellow[900],borderRadius:5,width:"99%",marginLeft:10}} >
                    <Box ><CompassCalibrationIcon style={{height:20, width:20, marginTop:5, marginLeft:7}}/></Box>
                   
                        <Typography style={{fontWeight:"bold", marginLeft:10, marginTop:2}}>Device Status</Typography>
                    
                </Box>

                    <Grid container rowSpacing={0} columnSpacing={8}  >
                        {SideData.map((item,index)=>{
                            return(
                                <Grid  item xs={3} style={{margin:10}} >
                                    <Card style={{height:110, width:220, backgroundColor:grey[200]}}>
                                        <Box justifyContent="space-between" display="flex" flexDirection="row" style={{height:"30%",width:"100%", backgroundColor:yellow[900]}}>
                                            <Box style={{margin:5}}>
                                                <Typography>{item.subtittle}</Typography>
                                            </Box>
                                            <Box style={{margin:5}}>
                                               {item.icon}
                                            </Box>

                                        </Box>
                                        <Card style={{height:"70%",width:"100%"}}>
                                            <Typography variant='h6' style={{fontWeight: 'bold',marginTop:10}}>{item.devices}</Typography>
                                            <Typography varianr='body2'>{item.d_title}</Typography>
                                        </Card>
                                    </Card>
                                </Grid>
                             )
                        })} 
                    </Grid>
                    
                </Box>

                <Box style={{height:"35%", backgroundColor:grey[200],margin:10}}>


                    <Box display="flex" flexDirection="row" style={{backgroundColor:yellow[900],borderRadius:5,width:"99%",marginLeft:10}}>
                        <Box ><CompassCalibrationIcon style={{height:20, width:20, marginTop:5, marginLeft:7}}/></Box>
                       
                            <Typography style={{fontWeight:"bold", marginLeft:10, marginTop:2}}>Device Information</Typography>
                       
                    </Box>

                    <Grid container rowSpacing={0} columnSpacing={8}  >
                        {SideData2.map((item,index)=>{
                            return(
                                <Grid  item xs={3} style={{margin:10}} >
                                    <Card style={{height:110, width:220, backgroundColor:grey[200]}}>
                                        <Box justifyContent="space-between" display="flex" flexDirection="row" style={{height:"30%",width:"100%", backgroundColor:yellow[900]}}>
                                            <Box style={{margin:5}}>
                                                <Typography>{item.subtittle}</Typography>
                                            </Box>
                                            <Box style={{margin:5}}>
                                               {item.icon}
                                            </Box>

                                        </Box>
                                        <Card style={{height:"70%",width:"100%"}}>
                                            <Typography variant='h6' style={{fontWeight: 'bold',marginTop:10}}>{item.devices}</Typography>
                                            <Typography varianr='body2'>{item.d_title}</Typography>
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

export default HomePage;
