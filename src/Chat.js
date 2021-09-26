import React, { useState, useEffect } from 'react'
import './Chat.css'
import { useSelector } from 'react-redux';
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import { selectUser } from './features/userSlice'
import { selectChannelId, selectChannelName } from './features/appSlice'
import db from './firebase'
import firebase from 'firebase'

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    //states
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    //firesOff when switching channels using channelList which changes channelId 
    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [channelId]);

    //firesoff
    const sendMessage = (e) => {
      e.preventDefault();

        db.collection("channels").doc(channelId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");
    };

    return (
        <div className="chat">
            {/* <h2>Chat screen</h2> */}
            {/* Chat header */}
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
            {messages.map((message) => (
                <Message
                    message={message.message}
                    timestamp={message.timestamp}
                    user={message.user}
                  />
                ))
            }
            </div>


            {/* Bottom message input */}
            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input 
                    placeholder={`messgae in ${channelName} `}
                    value={input}
                    disabled={!channelId}
                    onChange={(e) => setInput(e.target.value)} />

                    <button 
                    disabled={!channelId}
                    className="chat__inputButton" 
                    type="submit"
                    onClick={sendMessage}
                    >
                     Send Message </button>
                     </form>
                    <div className="chat_inputIcons">
                        <CardGiftcardIcon fontSize="large" />
                        <GifIcon fontSize="large" />
                        <EmojiEmotionsIcon fontSize="large" />
                    </div>
            </div>
        </div>

        
        
    )
}

export default Chat
