import React, { useEffect, useState } from "react";
import "./Post.css";
import logo from "../logo/logo.png";
// import wall from "../logo/wall.png";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import db from "./firebase";
function Post({
  dispayName,
  userName,
  verified,
  timestamp,
  text,
  image,
  avatar

}) {
  const [posts, setPosts] = useState([]);
useEffect(() => {
  db.collection("posts").onSnapshot(doc => {
      doc.id
      doc.data();
 });

}, [])


  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={logo} alt="logo" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Ian Mwangi @ianmwangi
              <span className="headerText__special">
                {verified && <VerifiedUserIcon className="post__badge" /> }
              </span>
            </h3>
            <div className="post__headerDescription">
              <p>Lets build the twitter clone</p>
            </div>
          </div>
          <img src={logo}
          alt="Walpaper" />
          {/* https://media.giphy.com/media/3o7aD5oU9qcCuAe9SU/giphy-downsized-large.gif */}
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
        {/* userName text*/}
        {/* header */}
      </div>
    </div>
  );
}
export default Post;
