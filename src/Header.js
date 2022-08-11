
import React,{useState} from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";

function Header() {
const [inputSearch , setInputSearch] = useState("");

  return (
    <div className="header">
     <div className='header_left'>
        <MenuIcon />
        <Link to="/">
        <img className="header_logo" 
         src="https://www.xda-developers.com/files/2017/08/After-12-Years-Google-Gives-YouTube-a-New-Logo-810x298_c.png"
         alt="" />
        </Link>
        
     </div>
     
     <div className='header_input'>
         <input  onChange={event => setInputSearch(event.target.value)} value={inputSearch} placeholder='Search' type="text"/>
         <Link to={`/search/${inputSearch}`}>
         <SearchIcon className="header_inputButton"/>
         </Link>  
      </div>

    <div className='header_icons'>
       <VideoCallIcon className="header_icon"/>
       <AppsIcon className="header_icon"/>
       <NotificationsIcon className="header_icon"/>
       <AccountCircleIcon className="header_icon"/>
      </div>
    </div>
    
  )
}

export default Header