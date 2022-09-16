import React from "react";
import Modal from "../UI/Modal";
import styles from "./Service.module.css";
import OzoneIcon from "../Icons/Ozone.svg";
import LampIcon from "../Icons/Lamp.svg";
import PumpIcon from "../Icons/Pump.svg";
import GuageIcon from "../Icons/Guage.svg";
import GreenIcon from "../Icons/Green.svg";
import OrangeIcon from "../Icons/Orange.svg";
import YellowIcon from "../Icons/Yellow.svg";
import AmpIcon from "../Icons/Amps.svg";

const Service = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles.location}>{props.onChoose.name}</div>
      <div className={styles["flex-row"]}>
        <div className={styles["flex-column"]}>
          <div className={styles.section}>
            <div className={styles.label}>
              <img className={styles.icon} src={LampIcon} />
              <label>Lamp</label>
            </div>

            <img className={styles.icon} src={GreenIcon} />
            <img className={styles.icon} src={YellowIcon} />
            <img className={styles.icon} src={OrangeIcon} />
            <img className={styles.icon} src={OrangeIcon} />
          </div>
          <div className={styles.section}>
            <div className={styles.label}>
              <img className={styles.icon} src={PumpIcon} />
              <label>Pump</label>
            </div>

            <img className={styles.icon} src={GreenIcon} />
            <img className={styles.icon} src={YellowIcon} />
            <img className={styles.icon} src={OrangeIcon} />
            <img className={styles.icon} src={OrangeIcon} />
          </div>
          <div className={styles.section}>
            <div className={styles.label}>
              <img className={styles.icon} src={GuageIcon} />
              <label>Guage</label>
            </div>
            <img className={styles.icon} src={AmpIcon} />
            <img className={styles.icon} src={AmpIcon} />
            <img className={styles.icon} src={AmpIcon} />
            <img className={styles.icon} src={AmpIcon} />
          </div>
        </div>
        <div className={styles.devices}>
          <div className={styles["flex-column"]}>
            <div className={styles.unit}>
              <img className={styles.ozone} src={OzoneIcon} />
              <p className={styles.number}>01</p>
              <div className={styles.space} />
            </div>

            <div className={styles.unit}>
              <img className={styles.ozone} src={OzoneIcon} />
              <p className={styles.number}>02</p>
              <div className={styles.space} />
            </div>

            <div className={styles.unit}>
              <img className={styles.ozone} src={OzoneIcon} />
              <p className={styles.number}>03</p>
              <div className={styles.space} />
            </div>

            <div className={styles.unit}>
              <img className={styles.ozone} src={OzoneIcon} />
              <p className={styles.number}>04</p>
              <div className={styles.space} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Service;
