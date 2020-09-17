import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header" >
            
            <div className="header_left" >
            <MenuIcon />
            <img
                className="youtube_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/337px-YouTube_Logo_2017.svg.png"
                alt=""
            />
            </div>

            <div className="header_input">
            <input type="text" placeholder="Search" />
            <SearchIcon className="header_search_button"  />
            </div>

            <div className="header_icons">
            <VideoCallIcon className="header_icon" />
            <AppsIcon className="header_icon" />
            <NotificationsIcon className="header_icon" />
            <Avatar
                alt="my-image"
                src=""
            />
            </div>
            
        </div>
    )
}

export default Header;
