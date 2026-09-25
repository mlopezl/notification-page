import notifications from "../../notifications.json";
import Notification from "./notification/Notification";

function NotificationList() {
  return (
    <section className="flex flex-col gap-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          avatar={notification.avatar}
          isNew={notification.isNew}
          type={notification.type}
          name={notification.name}
          post={notification.post}
          group={notification.group}
          time={notification.time}
          message={notification.message}
          picture={notification.picture}
        />
      ))}
    </section>
  );
}

export default NotificationList;
