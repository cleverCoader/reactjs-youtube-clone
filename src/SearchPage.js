import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';

function SearchPage() {
    return (
        <div className="searchPage" >
            <div className="searchPageFilter">
                <TuneIcon />
                <h2> Filter</h2>
            </div>
            <hr />
            
            <ChannelRow
                image="https://images.all-free-download.com/images/graphicthumb/beautiful_scenery_04_hd_pictures_166258.jpg"
                channel="cleanClearCleverCoder"
                verified
                subs="100M"
                noOfVideos="45"
                description="writing clean clear clever code is very important rather than bit  fast executing code because making the code understand to other developers is what the mission"

            />
            <hr />
            <VideoRow />

        </div>
    )
}

export default SearchPage;

