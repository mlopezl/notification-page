import NotificationAvatar from "./NotificationAvatar";
import NotificationBody from "./NotificationBody";

function Notification({avatar, isNew, type, name, post, group, time, picture, children }){
    return(
            <article className={`w-full flex flex-col gap-2 justify-between align-center rounded-lg p-4 
            ${isNew ? "bg-Navy-100" : "bg-White"}`}>
                <div className="flex gap-2">
                    <NotificationAvatar avatar={avatar}/>
                    <NotificationBody group={group} isNew={isNew} type={type} name={name} post={post} time={time} picture={picture}/>
                </div>
                {children}
            </article>
        
    )
}

export default Notification;