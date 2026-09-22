import NotificationsTitle from "./NotificationsTitle"
import MarkAllAsReadButton from "./MarkAllAsReadButton";

function NotificationsHeader(){
    return(
        <header className="flex justify-between text-sm">
            <NotificationsTitle NotificationsQuantity={3}/>
            <MarkAllAsReadButton/>
        </header>
    )
}

export default NotificationsHeader;