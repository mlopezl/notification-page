const messages = {
    "reaction": "reacted to your recent post",
    "follow": "followed you"
}

function NotificationInfo({name, post, type, isNew}){
    return(
         <p><span className="text-Navy-950 font-bold">{name}</span> {messages[type]}  <span className="font-bold">{post}</span>
         { isNew ? <span className="inline-block ml-1 w-2 h-2 rounded-full bg-Red-500"></span> : null }
         </p>
    )
}

export default NotificationInfo;