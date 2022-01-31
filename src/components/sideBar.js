import { Box, Grid, Button} from '@mui/material';
import { yellow } from '@mui/material/colors';
import React , {useState} from 'react'
import { SideBarData} from './data';
import HomePage from './homePage'

const SideBar = () => {


    const [Data, setData] = useState();


    return (

        <Box display="flex" flexDirection="row" style={{marginTop:50,width:"100%"}}>
            <Box style={{height:500, width:"20%", backgroundColor:yellow[900], margin:0}}>
                    
                {SideBarData.map((item,index)=>{
                    return(
                        <Grid style={{ margin:5}}>
                            
                            <Box display="flex" flexDirection="row" style={{marginTop:5}}>
                                <Box style={{marginLeft:5}}>
                                    {item.icon}
                                </Box>                                                              
                                    
                                <Button onClick={()=>setData(item.components)} style={{textTransform:"capitalize",height:30,color:"black"}}>                                    
                                    {item.title}                                   
                                </Button>  

                            </Box>
                            
                        </Grid>
                    )
                })}
                    
                
            </Box>



            <Box  style={{ width:"80%"}}>
                {Data != null ? (
          Data
        ): <HomePage/> }
            </Box>
        </Box>
    )
}

export default SideBar;
