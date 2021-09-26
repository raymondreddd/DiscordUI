import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'
import './SidebarChannel.css'


function SidebarChannel({id, channelName }) {
    //for showing repective chat room window of the channel
    const dispatch = useDispatch()
    
    
    return (
        <div className="sidebarChannel" onCLick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName,
        }))}>
            <h4>
                <span className="sidebarChannel__hash"></span>
                {channelName}
                
            </h4>
        </div>
    )
}

export default SidebarChannel
