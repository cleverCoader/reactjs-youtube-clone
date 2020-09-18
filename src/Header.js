import React,{useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";

function Header() {

    const [inputSearch, setInputSearch] = useState(' ');


    return (
        <div className="header" >
            
            <div className="header_left" >
            <MenuIcon />
            <Link to="/">
            <img
                className="youtube_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/337px-YouTube_Logo_2017.svg.png"
                alt=""
            />
            </Link>
                
            </div>

            <div className="header_input">
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    type="text"
                    placeholder="Search"
                />

                <Link to={`/search/${inputSearch}`} >
                    <SearchIcon className="header_search_button"  />
                </Link>
            </div>

            <div className="header_icons">
            <VideoCallIcon className="header_icon" />
            <AppsIcon className="header_icon" />
            <NotificationsIcon className="header_icon" />
            <Avatar
                alt="my-image"
                src="https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4"
            />
            </div>
            
        </div>
    )
}

export default Header;
