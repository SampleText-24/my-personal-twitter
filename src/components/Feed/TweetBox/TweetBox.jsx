import React, {useState} from "react";
import './TweetBox.css'
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import db from './../../../firebase'

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'клыкозубая сельдь',
            username: 'banal_anal',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://pbs.twimg.com/profile_images/1306628918619889667/NGoVlvtT_400x400.jpg'
        })

        setTweetImage('');
        setTweetMessage('');
    };

    return (
        <div className="tweetBox">
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://pbs.twimg.com/profile_images/1306628918619889667/NGoVlvtT_400x400.jpg'/>
                    <input onChange={e => setTweetMessage(e.target.value)}
                           value={tweetMessage}
                           placeholder="What's happening?"
                           type="text"/>
                </div>

                <input className='tweetBox__imageInput'
                       onChange={e => setTweetImage(e.target.value)}
                       value={tweetImage}
                       placeholder="Optional: Enter Image URL"
                       type="text"/>

                <Button onClick={sendTweet}
                        type='submit'
                        className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox