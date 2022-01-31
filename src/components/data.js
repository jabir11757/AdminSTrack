import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ErrorIcon from '@mui/icons-material/Error';
import PieChartIcon from '@mui/icons-material/PieChart';
import PlaceIcon from '@mui/icons-material/Place';
import LogoutIcon from '@mui/icons-material/Logout';
// import PowerOffIcon from '@mui/icons-material/PowerOff';
import ShareIcon from '@mui/icons-material/Share';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import HomePage from './homePage';
import Notification from './notification';
import VehicleInfo from './vehicleInfo'
import HomeListView from './homeListView';
import HomeGridView from './homeGridView'
import MonthlyReport from './monthlyReport'
import InactiveDevices from './inactiveDevices';
import UserProfile from './userProfile'
import LoginPanel from './loginPanel'


export const SideBarData =[
    {
        title: "Home",
        icon:<HomeIcon style={{height:20,width:20}}/>,
        components: <HomePage/>

    },
    {
        title: "All Vehicles",
        icon:<DirectionsCarIcon style={{height:20,width:20}}/>,
        components: <VehicleInfo/>

    },
    {
        title: "Shared Vehichles",
        icon:<ShareIcon style={{height:20,width:20}}/>,
        components: <HomePage/>

    },
    {
        title: "profile",
        icon:<PersonIcon style={{height:20,width:20}}/>,
        components: <UserProfile/>

    },
    {
        title: "Alerts",
        icon:<ErrorIcon style={{height:20,width:20}}/>,
        components: <Notification/>

    },
    {
        title: "Expense",
        icon:<MonetizationOnIcon style={{height:20,width:20}}/>,
        components: <HomePage/>
       
    },
    {
        title: "Unassign Devices",
        icon:<HomeIcon style={{height:22,width:22}}/>,
        components: <HomePage/>

    },
    {
        title: "Daily Travel Report",
        icon:<PieChartIcon style={{height:22,width:22}}/>,
        components: <HomePage/>
       
    },
    {
        title: "Inactive Devices",
        icon:<HomeIcon style={{height:22,width:22}}/>,
        components: <InactiveDevices/>

    },
    {
        title: "Monthly Report",
        icon:<PieChartIcon style={{height:22,width:22}}/>,
        components: <MonthlyReport/>
       
    },
    {
        title: "Devices Daily Report",
        icon:<PieChartIcon style={{height:22,width:22}}/>,
        components: <HomePage/>
       
    },
    {
        title: "Location Report",
        icon:<PlaceIcon style={{height:22,width:22}}/>,
        components: <HomePage/>
       
    },
    {
        title: "Distance Report",
        icon:<HomeIcon style={{height:22,width:22}}/>,
        components: <HomePage/>
       
    },
    {
        title: "Logout",
        icon:<LogoutIcon style={{height:22,width:22}}/>,
        components: <HomePage/>
       
    },
]
export const SideData = [
    {
        subtittle:"Connected",
        icon:<CastConnectedIcon/>,
        devices:"1735",
        d_title:"Devices"
    },
    {
        subtittle:"Non-Connected",
        icon:<CastConnectedIcon/>,
        devices:"623",
        d_title:"Devices"
    },
    {
        subtittle:"Active",
        icon:<CastConnectedIcon/>,
        devices:"1608",
        d_title:"Devices"
    },
    {
        subtittle:"Inactive",
        icon:<CastConnectedIcon/>,
        devices:"127",
        d_title:"Devices"
    },
    {
        subtittle:"Running",
        icon:<CastConnectedIcon/>,
        devices:"643",
        d_title:"Devices"
    },
    {
        subtittle:"Stopped",
        icon:<CastConnectedIcon/>,
        devices:"1092",
        d_title:"Devices"
    },
    
]

export const SideData2 = [
    {
        subtittle:"Connected",
        icon:<DirectionsCarIcon/>,
        devices:"2358",
        d_title:"Devices"
    },
    {
        subtittle:"Non-Connected",
        icon:<CloudDownloadIcon/>,
        d_title:"Download Vehicle Report"
    },
   
]

export const AllVehiclesData=[
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
    {
        id:"9170994647",
        sim:"SIM:01823624322",
        code:"CODE:MP21BgBV17818",
        ignition:"IGNITION:ON"
    },
]

export const InactiveDevicesData=[
    {
        month:"January 2022",
        devices:"12",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"2",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"10",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"7",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"6",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"9",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"3",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"4",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"9",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"3",
        device_title:"Devices"
    },
    {
        month:"January 2022",
        devices:"4",
        device_title:"Devices"
    },
]
