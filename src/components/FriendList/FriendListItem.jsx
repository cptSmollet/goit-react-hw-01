import clsx from "clsx";
import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p> {/* Добавлен класс name */}
      <p className={clsx(styles.status, {
        [styles.online]: isOnline,
        [styles.offline]: !isOnline
      })}>
        {isOnline ? "Online" : "Offline"}
      </p>          
    </div>
  );
}

export default FriendListItem;