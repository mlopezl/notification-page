import NotificationAvatar from "./NotificationAvatar";
import NotificationBody from "./NotificationBody";

function Notification({avatar, isNew, type, name, post, time }){
    return(
            <article className={`w-full flex justify-between rounded p-4 
            ${isNew ? "bg-Blue-100" : "bg-White"}`}>
                <NotificationAvatar avatar={avatar}/>
                <NotificationBody isNew={isNew} type={type} name={name} post={post} time={time}/>
            </article>
        
    )
}

export default Notification;