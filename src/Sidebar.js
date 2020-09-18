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
//--------------------------------------------------------------
// import Avatar from '@material-ui/core/Avatar';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
//----------------------------------------------------------
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';


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
            <hr />
            <h2 className="subscription-text" > Subscriptions</h2>
            <SidebarRow ICon={PermIdentityIcon} title="Clever-Coader" /> 
            <SidebarRow ICon={PermIdentityIcon} title="Clever Programmer" />
            <SidebarRow ICon={PermIdentityIcon} title="Web Dev Simplified" /> 
            <SidebarRow ICon={PermIdentityIcon} title="JS Mastery" /> 
            <hr />

            <h2 className="subscription-text" > more from youtube</h2>
            <SidebarRow ICon={YouTubeIcon} title="YouTube Premium" /> 
            <SidebarRow ICon={FindInPageOutlinedIcon} title="Learning" /> 
            <SidebarRow ICon={LocalMoviesIcon} title="Movies" /> 
            <SidebarRow ICon={SportsEsportsIcon} title="Gaming" /> 
            <hr />
            <SidebarRow ICon={SettingsIcon} title="Settings" /> 
            <SidebarRow ICon={FlagIcon} title="Report history" /> 
            <SidebarRow ICon={HelpIcon} title="Help" /> 
            <SidebarRow ICon={FeedbackIcon} title="Send Feedback" /> 

        </div>
    )
}

export default Sidebar;
