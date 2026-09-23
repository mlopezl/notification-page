import NotificationsHeader from "./NotificationsHeader";
import NotificationList from "./NotificationsList";
function NotificationContainer(){
    return(
        <main className="bg-White flex flex-col gap-4 w-full max-w-lg min-h-screen p-5 font-Plus-Jakarta">
            <NotificationsHeader/>
            <NotificationList/>
        </main>
    )
}

export default NotificationContainer;