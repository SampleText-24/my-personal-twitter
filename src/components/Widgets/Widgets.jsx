import React from "react";
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={'1305148322596954113'} />

                <TwitterTimelineEmbed sourceType='profile'
                                      screenName='banal_anal'
                                      options={{height: 650}}
                />

            </div>
        </div>
    )
}

export default Widgets;