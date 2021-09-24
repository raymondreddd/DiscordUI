import React from 'react'
import './sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { InfoOutlined } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <h2>Sidebar</h2> */}
            <div className="sidebar__top">
                <h3>Top bar</h3>
                <ExpandMoreIcon />
            </div>  

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                        <AddIcon className="sidebar__addChannel" />
                    </div>
                </div>

                {/* Channel lists*/}
                <div className="sidebar__channelList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>

                {/* voice connection */}
                <div className="sidebar__voice">
                    <SignalCellularAltIcon className="sidebar__voiceIcon" fonctSixe="large"
                     />

                     <div className="sidebar__voiceInfo">
                     <h3>Voice connected</h3>
                     <p>Stream</p>
                     </div>

                     <div className="sidebar__voiceIcons">
                         <InfoOutlined />
                         <CallIcon />
                     </div>
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src="https://supersoldierproject.com/wp-content/uploads/2021/02/Tyler.jpg" />
                <div className="sidebar__profileInfo">
                    <h3>Name</h3>
                    <p> This is id </p>
                </div>

                <div className="sidebar__profileIcons" >
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
