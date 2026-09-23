import NotificationInfo from "./NotificationInfo";
import NotificationTime from "./NotificationTime";

function NotificationBody({time, name, post, type, isNew}){
    return(
         <section className="w-[80%] text-[12px] font-medium text-Gray-600">
               <NotificationInfo isNew={isNew} name={name} type={type} post={post}/>
               <NotificationTime time={time}/>
         </section>
    )
}

export default NotificationBody;