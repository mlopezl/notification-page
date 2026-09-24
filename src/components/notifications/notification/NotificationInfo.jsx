import NewNotificationIcon from "./NewNotificationIcon";
import Picture from "./Picture";

const messages = {
    "reaction": "reacted to your recent post",
    "follow": "followed you",
    "joined": "has joined your group",
    "left": "left the group",
    "message": "send you a private message",
    "commented": "commented on your picture"
}

function NotificationInfo({name, post, type, isNew, group, picture}){
    return(
        <div className="flex justify-between">
            <p><span className="text-Navy-950 font-bold">{name}</span> {messages[type]}  <span className="font-bold">{post}</span> <span className="text-Blue-950 font-semibold">{group}</span>
         { isNew ? <NewNotificationIcon/> : null }
         </p>
         { picture ? <Picture picture={picture}/> : null}
        </div>      
    )
}

export default NotificationInfo;