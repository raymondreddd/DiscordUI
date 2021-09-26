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
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import {auth} from './firebase';

function Sidebar() {

    //for the avatar info
    const user = useSelector(selectUser);
    console.log("In sidebar user object")
    console.log(user)
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
                    </div>
                    <AddIcon className="sidebar__addChannel" />
                </div>

                {/* Channel lists*/}
                <div className="sidebar__channelList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
         </div>

                {/* voice connection */}
                <div className="sidebar__voice">
                    <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"
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
            {/* </div> */}


            {/* Profile & avatar at bottom */}
            <div className="sidebar__profile">
                <Avatar src={user.photo} onClick={() => auth.signOut()}alt="photo from email" />
                <div className="sidebar__profileInfo">
                    <h3>WTF{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
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
