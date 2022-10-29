import React from "react";
import logo from "../logo/logo.png";
import "./TweetBox.css";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={logo} />
          <input placeholder="Whats happening" type="text" />
          <input
            placeholder="Optional: Enter image url"
            className=".tweetBox__imageinput"
            type="text"
          />
        </div>
        {/* <Button>Tweet</Button> */}
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}
export default TweetBox;
