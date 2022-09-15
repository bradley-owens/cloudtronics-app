import React from "react";
import styles from "./Overview.module.css";
import OzoneIcon from "../../Icons/Ozone.svg";
import TickIcon from "../../Icons/Tick.svg";
import CrossIcon from "../../Icons/Cross.svg";
import AlertIcon from "../../Icons/Alert.svg";
import RepairIcon from "../../Icons/Repair.svg";
import LampIcon from "../../Icons/Lamp.svg";
import PumpIcon from "../../Icons/Pump.svg";
import LocationIcon from "../../Icons/Location.svg";

const Overview = (props) => {
  return (
    <div className={styles.statistics}>
      <div className={styles.section}>
        <div className={styles["flex-column"]}>
          <img className={styles.icon} src={OzoneIcon}></img>
          <p>OzoneMate</p>
        </div>
        <div className={styles["flex-column"]}>
          <p>Total Devices</p>
          <h3 className={styles.number}>{props.status.total}</h3>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles["flex-column"]}>
          <img className={styles.icon} src={TickIcon}></img>
          <p>Online</p>
        </div>
        <h3 className={styles.number}>{props.status.online}</h3>

        <div className={styles["flex-column"]}>
          <img className={styles.icon} src={CrossIcon}></img>
          <p>Offline</p>
        </div>
        <h3 className={styles.number}>{props.status.offline}</h3>
      </div>

      <div className={styles.section}>
        <div className={styles["flex-column"]}>
          <img className={styles.icon} src={AlertIcon}></img>
          <p>Alert</p>
        </div>
        <h3 className={styles.number}>{props.status.alert}</h3>

        <div className={styles["flex-column"]}>
          <img className={styles.icon} src={RepairIcon}></img>
          <p>Repairing</p>
        </div>
        <h3 className={styles.number}>{props.status.repairing}</h3>
      </div>

      <div className={styles.section}>
        <div className={styles["flex-column"]}>
          <div className={styles["flex-row"]}>
            <img className={styles.icon} src={LampIcon}></img>

            <div className={styles["flex-column"]}>
              <p>Lamp Total Hours</p>
              <h3 className={styles.number}>{props.status.lampHours}</h3>
            </div>
          </div>

          <div className={styles["flex-row"]}>
            <img className={styles.icon} src={PumpIcon}></img>

            <div className={styles["flex-column"]}>
              <p>Pump Total Hours</p>
              <h3 className={styles.number}>{props.status.pumpHours}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <img className={styles.icon} src={LocationIcon}></img>
        <div className={styles["flex-column"]}>
          <p>Location</p>
          <h3 className={styles.number}>{props.markers.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
