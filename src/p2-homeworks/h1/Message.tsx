import React from 'react'
import style from './Message.module.css'

type MessagesPropsTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message:React.FC<MessagesPropsTypes> = (props) => {
    return (
        <div className={style.userMessage}>
            <div className={style.messageUserBubble}>
                <div className={style.userLogo}>
                    <img src="http://uitheme.net/sociala/images/user-11.png" alt="userLogo"/>
                </div>
                <div className={style.triangle}>

                </div>
                <div className={style.chatBubble}>
                        <div className={style.userName}>{props.name}</div>
                        <div className={style.userText}>{props.message}</div>
                        <div className={style.messageTime}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
