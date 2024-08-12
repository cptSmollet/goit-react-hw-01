import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.boxProfile}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" className={styles.imgProfile} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <div className={styles.boxStatsList}>

      <ul className={styles.statsList}>
        <li className={styles.itemList}>
          <span className={styles.types}>Followers</span>
          <span className={styles.stats}>{stats.followers}</span>
        </li>
        <li className={styles.itemList}>
          <span className={styles.types}>Views</span>
          <span className={styles.stats}>{stats.views}</span>
        </li>
        <li className={styles.itemList}>
          <span className={styles.types}>Likes</span>
          <span className={styles.stats}>{stats.likes}</span>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Profile;