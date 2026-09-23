import avatar from "../../../public/assets/images/avatar-mark-webber.webp";
import avatar2 from "../../../public/assets/images/avatar-angela-gray.webp"
import Notification from "./notification/Notification"

function NotificationList(){
    return(
        <section className="flex flex-col gap-2">
            <Notification avatar={avatar} isNew={true} type={"reaction"} name={"Mark Webber"} post={"My first tournament today!"} time={"1m ago"}/>
            <Notification avatar={avatar2} isNew={true} type={"follow"} name={"Angela Gray"} post={null} time={"5m ago"} />
        </section>
    )
}

export default NotificationList