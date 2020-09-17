import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';


// Material UI icons to pass as components for side nav 
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

//-------------------------------------------------------------
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Sidebar() {
    return (
        <div className="sidebar" >
            {/* <h2>This is SideBar</h2> */}

            <SidebarRow selected="selected"  ICon={HomeIcon} title="Home" />  {/* we can pass only selected i.e JS property of ....*/}
            <SidebarRow ICon={WhatshotIcon} title="Trending" /> 
            <SidebarRow ICon={SubscriptionsIcon} title="Subscription" /> 
            <hr />
            <SidebarRow ICon={VideoLibraryIcon} title="Library" /> 
            <SidebarRow ICon={HistoryIcon} title="History" /> 
            <SidebarRow ICon={OndemandVideoIcon} title="Your videos" /> 
            <SidebarRow ICon={WatchLaterIcon} title="Watch later" /> 
            <SidebarRow ICon={ThumbUpAltIcon} title="Liked videos" /> 
            <SidebarRow ICon={ExpandMoreIcon} title="Show more" /> 
            <hr/>






            


        </div>
    )
}

export default Sidebar;
