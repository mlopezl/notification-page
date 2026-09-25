import notifications from "../../notifications.json";
import Notification from "./notification/Notification";

function NotificationList() {
  return (
    <section className="flex flex-col gap-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          avatar={import.meta.env.BASE_URL + notification.avatar.replace(/^\//, "")}
          isNew={notification.isNew}
          type={notification.type}
          name={notification.name}
          post={notification.post}
          group={notification.group}
          time={notification.time}
          message={notification.message}
          picture={notification.picture ? import.meta.env.BASE_URL + notification.picture.replace(/^\//, "") : undefined}
        />
      ))}
    </section>
  );
}

export default NotificationList;
