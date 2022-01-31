import { Box,Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RouteIcon from '@mui/icons-material/Route';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react'

const MonthlyReport = () => {
    return (
        <Box display="flex" flexDirection="column" style={{height:490,margin:10, backgroundColor:grey[200],borderRadius:15}}>
            
                <Box display="flex" flexDirection="row" style={{height:70,borderRadius:15}}>
                    <Box display="flex" flexDirection="row" style={{width:"25%",margin:1,backgroundColor:yellow[900],borderTopLeftRadius:15}}>
                        <RouteIcon style={{height:40,width:40,marginTop:15,marginLeft:20}}/>
                        <Box style={{marginTop:10,marginLeft:20}}>
                        <Typography>Total Distance</Typography>
                        <Typography>12054.00 km</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" style={{width:"25%",margin:1,backgroundColor:yellow[900]}}>
                        <DateRangeIcon style={{height:40,width:40,marginTop:15,marginLeft:20}}/>
                        <Box style={{marginTop:10,marginLeft:20}}>
                        <Typography>Total Distance</Typography>
                        <Typography>12054.00 km</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" style={{width:"50%",margin:1,backgroundColor:yellow[900],borderTopRightRadius:15}}>
                        <Stack style={{marginTop:15}}>
                           <Pagination count={12}/>
                        
                        </Stack>
                    </Box>
                </Box>

                <Box style={{marginTop:200}}>Sultan Tracker</Box>
            
        </Box>
        )
}

export default MonthlyReport;
