function NotificationMessage({message}){
    return(
        <article className="p-3 border-1 border-Navy-100 rounded w-[82%] self-end
        text-[12px]/4 text-Gray-600 hover:bg-Navy-50 hover:cursor-pointer">
            <p>{message}</p>
        </article>
    )
}

export default NotificationMessage;