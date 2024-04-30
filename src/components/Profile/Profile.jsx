import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.avatarContainer}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.listSpan}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.listSpan}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.listSpan}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
