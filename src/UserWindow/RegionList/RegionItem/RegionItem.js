import React, { Fragment, useEffect } from "react";
import styles from "./RegionItem.module.css";

const RegionItem = (props) => {
  return (
    <ul key={props.id} onClick={props.onClick}>
      <div id={props.name} className={styles.container}>
        <div id={props.name} className={styles["flex-column"]}>
          <div
            id={props.name}
            className={props.alertAmount > 0 ? styles.alert : styles.location}
          >
            {props.alertAmount > 0 && (
              <img
                id={props.name}
                className={styles.icon}
                src={props.alert}
              ></img>
            )}

            <p id={props.name}>{props.location}</p>
          </div>
          <div id={props.name} className={styles["flex-row"]}>
            <img
              id={props.name}
              className={styles.icon}
              src={props.ozone}
            ></img>
            <p id={props.name} className={styles.number}>
              {props.devices}
            </p>
            <img id={props.name} className={styles.icon} src={props.tick}></img>
            <p id={props.name} className={styles.number}>
              {props.onlineAmount}
            </p>
            <img
              id={props.name}
              className={styles.icon}
              src={props.cross}
            ></img>
            <p id={props.className} className={styles.number}>
              {props.offlineAmount}
            </p>
            <img
              id={props.name}
              className={styles.icon}
              src={props.alert}
            ></img>
            <p id={props.name} className={styles.number}>
              {props.alertAmount}
            </p>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default RegionItem;
