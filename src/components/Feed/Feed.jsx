import React, {useEffect, useState} from "react";
import './Feed.css'
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import db from './../../firebase'
import FlipMove from "react-flip-move";

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
        {/* Header */}
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        {/* TweetBox */}
        <TweetBox />
        {/* Post */}
        <FlipMove>

            {posts.map(post => (
                <Post displayName={post.displayName}
                      key={post.text}
                      username={post.username}
                      verified={post.verified}
                      text={post.text}
                      avatar={post.avatar}
                      image={post.image}
                />
            ))}
            <Post displayName='Просто Лёша'
                  username='SampleText'
                  key='asd'
                  verified
                  text='Твиты постяться в случайном порядке, когда нибудь исправлю'
                  avatar='https://sun1-87.userapi.com/c846523/v846523358/1fda2e/yCQ8cABPXoM.jpg'
                  image='https://media0.giphy.com/media/Y4Jb8jkcqRtnznTnpC/giphy.gif'
            />
            <Post displayName='Просто Лёша'
                  username='SampleText'
                  verified
                  key='ad'
                  text='Твичу только в своём твиторе'
                  avatar='https://sun1-87.userapi.com/c846523/v846523358/1fda2e/yCQ8cABPXoM.jpg'
                  image='https://media4.giphy.com/media/u4DnvVypp0q8U/giphy.gif?cid=ecf05e47itz9kck4e34qibeglg37xb1bdlgkhfphhwosje24&rid=giphy.gif'
            />
        </FlipMove>
        </div>
    )
}

export default Feed;