import { Avatar } from '@material-ui/core'
import { StopRounded } from '@material-ui/icons'
import React from 'react'
import ReactTimeago from 'react-timeago'
import "./Chat.css"
import { selectImage } from "../../features/appSlice"
import { useDispatch } from 'react-redux'
import { db } from '../../firebase'
import { useHistory } from 'react-router'

const Chat = ({ id, username, timestamp, read, imageUrl, profilePic }) => {
    const dispatch = useDispatch();

    const history = useHistory();

    const open = () => {
        if (!read) {
            dispatch(selectImage(imageUrl));
            db.collection("posts").doc(id).set({
                read: true,
            }, { merge: true })

            history.push("/chats/view");
        }
    }

    return (
        <div onClick={open} className="chat">
            <Avatar className="chat_avatar" src={profilePic} />
            <div className="chat_info">
                <h4>{username}</h4>
                <p>{!read && "Tap to view -"} < ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
            </div>

            {!read && <StopRounded className="chat_readIcon" />}
        </div>
    )
}

export default Chat
