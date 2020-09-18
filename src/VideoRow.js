import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import './VideoRow.css';

function VideoRow({views, timeStamp, channelName, title, image }) {
    return (
        <div className="VideoRow">
            <img  className="videoRow__icon" src={image} alt="" />
            <div className="videoRow_items">
                <Avatar className="videoRow_avatar" alt={channelName} src={image}  />
                <div className="videoRow_text">
                    <h4> {title} </h4>
                    <p> {channelName} </p>
                    <p>
                        {views} . {timeStamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoRow;

