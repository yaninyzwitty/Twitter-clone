import React from "react";
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, TwitterFollowButton } from "react-twitter-embed"; 

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__container">
        <h2>Whats happening</h2>
        <TwitterTweetEmbed
  tweetId={'1533870217515999235'}
/>
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="yaninyzwitty"
  options={{height: 400}}
/>
  <TwitterShareButton
    url={'https://facebook.com/ianinyz.witty'}
    options={{ text: '#reactjs is very awesome', via: 'YaninyzWitty' }}
  />
    <TwitterFollowButton
    screenName={'yaninyzwitty'}
  />
      </div>
    </div>
   
  );
}
export default Widgets;

