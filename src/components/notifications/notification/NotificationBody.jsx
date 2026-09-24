import NotificationInfo from "./NotificationInfo";
import NotificationTime from "./NotificationTime";

function NotificationBody({time, name, post, type, isNew, group, picture}){
    return(
         <section className="w-[80%] text-[12px]/4 font-medium text-Gray-600">
               <NotificationInfo isNew={isNew} name={name} type={type} post={post} group={group} picture={picture}/>
               <NotificationTime time={time}/>
         </section>
    )
}

export default NotificationBody;