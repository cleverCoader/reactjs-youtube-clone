import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function ChannelRow({image,channel, subs,noOfVideos,description,verified}) {
    return (
        <div className="channelRow" >
            <Avatar className="channelRow_logo" alt={channel} src={image} />
            <div className="channelRow_text">
                <h4> {channel} {verified && <CheckCircleIcon />} </h4>
                <p> <span className="span_element">{subs} subscribers</span>  . {noOfVideos} videos </p>
                <p> {description} </p>
            </div>
            
        </div>
    )
}

export default ChannelRow;
