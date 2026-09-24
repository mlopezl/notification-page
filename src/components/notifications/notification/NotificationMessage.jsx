function NotificationMessage({message}){
    return(
        <article className="p-3 border-1 border-Navy-100 rounded w-[80%] self-end
        text-[12px]/4 text-Gray-600">
            <p>{message}</p>
        </article>
    )
}

export default NotificationMessage;