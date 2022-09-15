import React, { useState } from "react";
import styles from "./UserWindow.module.css";
import Overview from "./Overview/Overview";
import RegionList from "./RegionList/RegionList";

const UserWindow = (props) => {
  const [activeOverview, setActiveOverview] = useState(true);
  const [activeRegion, setActiveRegion] = useState(false);

  const overviewHandler = (e) => {
    setActiveOverview(true);
    setActiveRegion(false);
  };

  const regionHandler = (e) => {
    setActiveRegion(true);
    setActiveOverview(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <a
          className={activeOverview ? styles.active : styles.tab}
          onClick={overviewHandler}
        >
          Overview
        </a>
        <a
          className={activeRegion ? styles.active : styles.tab}
          onClick={regionHandler}
        >
          Region List
        </a>
      </div>
      {activeOverview && (
        <Overview markers={props.markers} status={props.status} />
      )}
      {activeRegion && (
        <RegionList
          markers={props.markers}
          status={props.status}
          onClick={props.onClick}
        />
      )}
    </div>
  );
};

export default UserWindow;
