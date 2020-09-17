import React from 'react';
import './VideoCard.css';

import Avatar from '@material-ui/core/Avatar';


function VideoCard({image, title, channel, views, timeStamp, channelImage}) {
    return (
        <div className="videoCard" >
            <img className="videoCard_image" src={image} alt="" />
            <div className="videoCard_info">
                <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
                <div className="video_text">
                    <h4> {title} </h4>
                    <p> {channel} </p>
                    <p>
                        {views} . {timeStamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
