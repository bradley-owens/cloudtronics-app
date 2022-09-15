import React from "react";
import styles from "./RegionItem.module.css";

const RegionItem = (props) => {
  return (
    <div onClick={props.onClick}>
      <div id={props.id} className={styles.container}>
        <div id={props.id} className={styles["flex-column"]}>
          <div
            id={props.id}
            className={props.alertAmount > 0 ? styles.alert : styles.location}
          >
            {props.alertAmount > 0 && (
              <img
                id={props.id}
                className={styles.icon}
                src={props.alert}
              ></img>
            )}

            <p id={props.id}>{props.location}</p>
          </div>
          <div id={props.id} className={styles["flex-row"]}>
            <img id={props.id} className={styles.icon} src={props.ozone}></img>
            <p id={props.id} className={styles.number}>
              {props.devices}
            </p>
            <img id={props.id} className={styles.icon} src={props.tick}></img>
            <p id={props.id} className={styles.number}>
              {props.onlineAmount}
            </p>
            <img id={props.id} className={styles.icon} src={props.cross}></img>
            <p id={props.id} className={styles.number}>
              {props.offlineAmount}
            </p>
            <img id={props.id} className={styles.icon} src={props.alert}></img>
            <p id={props.id} className={styles.number}>
              {props.alertAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionItem;
