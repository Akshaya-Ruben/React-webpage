import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">ENERGY</span>
            </div>
            <div className="topRight">
                <div className="topRightIconconatiner">
                <NotificationsIcon/>
                <span className="notificationiconbadge">2</span>
                </div>
                <div className="topRightIconconatiner">
                <AssignmentIcon/>
                </div>
                <div className="topRightIconconatiner">
                <AccountCircleIcon/>
                
                </div>
            </div>
            </div>
        </div>
    )
}
