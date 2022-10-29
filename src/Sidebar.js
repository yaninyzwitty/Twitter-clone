import React from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from '@material-ui/core/Button';

const Sidebar = () => {
  return (
    <div className="sidebar">
  {/* Twitter icon */}
      <TwitterIcon
      className="sidebar__twittericon" 
      />
      {/* Sidebar:options */}
      <SidebarOption 
      Icon={HomeIcon} 
      text="Home"
      active={true}
       />
       
      <SidebarOption Icon={SearchIcon} text="Search" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="List" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Button--> tweeting */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
};
export default Sidebar;
