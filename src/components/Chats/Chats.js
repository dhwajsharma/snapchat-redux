import { Avatar } from '@material-ui/core'
import { ChatBubble, RadioButtonUnchecked, Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from '../../features/appSlice'
import { auth, db } from '../../firebase'
import Chat from '../Chat/Chat'
import "./Chats.css"

const Chats = () => {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, []);

    const takeSnap = () => {
        history.push("/");
    }

    return (
        <div className="chats">
            <div className="chats_header">
                <Avatar src={user.profilePic} onClick={() => auth.signOut()} className="chats_avatar" />
                <div className="chats_search">
                    <Search className="chats_searchIcon" />
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

            <RadioButtonUnchecked onClick={takeSnap} className="chats_takePicIcon" fontSize="large" />
        </div>
    )
}

export default Chats
