import avatar from "../../../public/assets/images/avatar-mark-webber.webp";
import avatar2 from "../../../public/assets/images/avatar-angela-gray.webp";
import avatar3 from "../../../public/assets/images/avatar-jacob-thompson.webp";
import avatar4 from "../../../public/assets/images/avatar-rizky-hasanuddin.webp";
import avatar5 from "../../../public/assets/images/avatar-anna-kim.webp";
import avatar6 from "../../../public/assets/images/avatar-nathan-peterson.webp";
import avatar7 from "../../../public/assets/images/avatar-kimberly-smith.webp";
import picture from "../../../public/assets/images/image-chess.webp";
import Notification from "./notification/Notification"
import NotificationMessage from "./notification/NotificationMessage";

function NotificationList(){
    return(
        <section className="flex flex-col gap-2">
            <Notification avatar={avatar} isNew={true} type={"reaction"} name={"Mark Webber"} post={"My first tournament today!"} group={null} time={"1m ago"}/>
            <Notification avatar={avatar2} isNew={true} type={"follow"} name={"Angela Gray"} time={"5m ago"} />
            <Notification avatar={avatar3} isNew={true} type={"joined"} name={"Jacob Thompson"} group={"Chess Club"} time={"1 day ago"} />
            <Notification avatar={avatar4} isNew={false} type={"message"} name={"Rizky Hasanudin"} time={"5 days ago"}>
                <NotificationMessage message={"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."}/>
            </Notification>
            <Notification avatar={avatar7}  isNew={false} type={"commented"} name={"Kimberly Smith"} time={"1 week ago"} picture={picture}/>
            <Notification avatar={avatar6} isNew={false} type={"reaction"} name={"Nathan Peterson"} post={"5 end-game strategies to increase your win rate"} group={null} time={"1m ago"}/>
            <Notification avatar={avatar5} isNew={false} type={"left"} name={"Anna Kim"} time={"2 weeks ago"} group={"Chess Club"}/>
        </section>
    )
}

export default NotificationList