import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="70" />
      <p>{name}</p>
      <p
        className={clsx(
          css.status,
          isOnline === true ? css.active : css.notActive
        )}
      >
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
}
