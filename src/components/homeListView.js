import { Box } from '@mui/material';
import { withStyles, makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'
import { blueGrey } from '@mui/material/colors';

const HomeListView = () => {



    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
       
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.common.black,
          },
        },
      }))(TableRow);
      

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
        head: {
            backgroundColor: blueGrey[200],
            
          },
      });
      
      function createData(activity, time, energy, work_break, gathering) {
        return { activity, time, energy, work_break, gathering };
      }
      
      const rows = [
        createData('Android', 159, 6.0, 24, 4.0),
        createData('Graphics', 237, 9.0, 37, 4.3),
        createData('Producer', 262, 16.0, 24, 6.0),
        createData('Actor', 305, 3.7, 67, 4.3),
        createData('Player', 356, 16.0, 49, 3.9),
      ];
      
      
      

    const classes = useStyles();
    return (


        <Box display="flex" flexDirection="row">
            <Box style={{width:"20%"}}>fdh</Box>
            <Box style={{width:"80%"}}>
            <TableContainer component={Paper} style={{margin:10}}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow >
              <StyledTableCell>Activity</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="right">Energy</StyledTableCell>
              <StyledTableCell align="right">Work_break</StyledTableCell>
              <StyledTableCell align="right">Ghathering</StyledTableCell>
             
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.activity}>
                <TableCell component="th" scope="row">
                  {row.activity}
                </TableCell>
                <StyledTableCell align="right">{row.time}</StyledTableCell>
                <TableCell align="right">{row.energy}</TableCell>
                <TableCell align="right">{row.work_break}</TableCell>
                <TableCell align="right">{row.gathering}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            </Box>
        </Box>
    )
}

export default HomeListView;
