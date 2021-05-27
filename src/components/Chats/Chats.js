import { Avatar } from '@material-ui/core'
import { ChatBubble, Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import Chat from '../Chat/Chat'
import "./Chats.css"

const Chats = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, [])

    return (
        <div className="chats">
            <div className="chats_header">
                <Avatar className="chats_avatar" />
                <div className="chats_search">
                    <Search />
                    <input placeholder="Friends" type="text" />
                </div>
                <ChatBubble className="chats_chatIcon" />
            </div>

            <div className="chats_posts">
                {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read }, }) => (
                    <Chat
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chats
