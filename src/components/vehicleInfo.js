import { Box,Card,Typography,Button, IconButton } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Car from "../image/car.png"
import "./vehicleInfo.css"


import React from 'react'
import { grey, yellow } from '@mui/material/colors';

const VehicleInfo = () => {
    return (
        <Box display="flex" flexDirection="row" style={{height:505}} >

            

                <Box style={{ backgroundColor:grey[200],margin:10}}>
                    <Box display="flex" flexDirection="row" style={{marginTop:20,backgroundColor:yellow[900],borderRadius:5}}>
                       <Box ><DirectionsCarIcon style={{height:20, width:20, marginTop:3, marginLeft:15}}/></Box>
                        <Typography style={{fontWeight:"bold",marginLeft:15, marginTop:2}}>Edit Vehicle Information</Typography>
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box style={{width:"50%",margin:0}}>
                            <Box style={{marginTop:20}}>
                                <form class="form-controler">
                                    <label >Driver Name/Customer Name:
                                        <input type="text" />
                                    </label>
                                </form>
                                <form class="form-controler">
                                    <label >Driver Phone/Customer Phone:
                                        <input type="text" />
                                    </label>
                                </form>
                                <form class="form-controler">
                                    <label >Vehicle Registration Number:
                                        <input type="text" />
                                    </label>
                                </form>
                                <form class="form-controler">
                                    <label >Vehicle Model:
                                        <input type="text" />
                                    </label>
                                </form>
                                <form class="form-controler">
                                    <label >Code:
                                        <input type="text" />
                                    </label>
                                </form>
                                <form class="form-controler">
                                    <label >Device Sim Number:
                                        <input type="text" />
                                    </label>
                                </form>
                        </Box>
                        </Box>
                        <Box style={{width:"50%", margin:0}}>
                        <Box style={{marginTop:10}}>
                                <form class="form-control">
                                    <label >Mileage:
                                        <input type="text" />
                                    </label>
                                </form>
                                <form class="form-control">
                                    <label >Congestion Consumption:
                                        <input type="text" />
                                    </label>
                                </form>

                                <Card style={{height:200,width:407, display:"inline-block",backgroundImage:`url(${Car})`}}>
                                    <IconButton style={{marginLeft:-350, marginTop:6}}><CameraAltIcon /></IconButton>
                                </Card>
                                <Button style={{backgroundColor:yellow[900],color:"black", width:100,marginTop:20, marginLeft:310}}>Submit</Button>
                                
                        </Box>
                        </Box>
                    </Box>
                </Box>

                
        </Box>
    )
}

export default VehicleInfo;
