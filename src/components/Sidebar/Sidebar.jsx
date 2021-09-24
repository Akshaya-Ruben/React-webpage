import "./sidebar.css"
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarlist">
                <li className="sidebarlistItem active">
                    <HomeIcon className= "sidebarIcons"/> Home
                    </li>
                    <li className="sidebarlistItem">
                    <BatteryCharging80Icon className= "sidebarIcons"/> Energy Balance
                    </li>
                    <li className="sidebarlistItem">
                    <TimelineIcon className= "sidebarIcons"/> Analytics
                    </li>
                    <li className="sidebarlistItem">
                    <AssessmentIcon className= "sidebarIcons"/> Reports
                    </li>

                </ul>
                
                </div>
            </div>
        </div>
    )
}
