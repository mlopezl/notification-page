function NotificationsTitle({NotificationsQuantity}){
    return(
        <h2 className="flex gap-2 font-bold text-Navy-950 text-[17px]">
            Notifications 
            <span className="w-6 h-6 flex justify-center align-center rounded bg-Blue-950 text-White">{NotificationsQuantity}</span>
        </h2>
    )
}

export default NotificationsTitle;