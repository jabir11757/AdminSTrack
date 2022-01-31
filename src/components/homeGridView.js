import { Avatar, Box, Card, Grid, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import React from 'react'
import { AllVehiclesData } from './data';

const HomeGridView = () => {
    return (
        <Box display="flex" flexDirection="row" style={{marginTop:60}}>

            
           <Box style={{width:"20%"}}></Box>


           <Box style={{width:"80%"}}>
           <Grid container columns={{ md: 12 }} columnSpacing={-16}>
                {AllVehiclesData.map((item,index)=>{
                    return(
                        <Grid item md={4}>
                            <Card style={{height:85, width:250,margin:5, backgroundColor:grey[200]}}>
                                <Box display="flex" flexDirection="row">

                                    <Box>
                                        <Avatar style={{height:50, width:50, margin:10,backgroundColor:yellow[900]}}/>
                                    </Box>

                                    <Box style={{margin:5}}>
                                        <Typography style={{fontWeight:"bold", marginLeft:-45}}>{item.id}</Typography>
                                        <Typography variant='body2' style={{ marginLeft:-40, fontSize: '.7rem'}}>{item.sim}</Typography>
                                        <Typography variant='body2' style={{ marginLeft:-5, fontSize: '.7rem'}}>{item.code}</Typography>
                                        <Typography variant='body2' style={{ marginLeft:-60, fontSize: '.7rem'}}>{item.ignition}</Typography>
                                    </Box>

                                </Box>
                            </Card>
                        </Grid>
                    )
                })}
            
            </Grid>
           </Box>
        </Box>
    )
}

export default HomeGridView;
