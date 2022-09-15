import React, { Fragment } from "react";
import styles from "./RegionList.module.css";
import OzoneIcon from "../../Icons/Ozone.svg";
import TickIcon from "../../Icons/Tick.svg";
import CrossIcon from "../../Icons/Cross.svg";
import AlertIcon from "../../Icons/Alert.svg";
import RegionItem from "./RegionItem/RegionItem";

const RegionList = (props) => {
  return (
    <Fragment>
      <div className={styles.statistics}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
        ></input>

        {props.markers.map((marker) => {
          return (
            <RegionItem
              ozone={OzoneIcon}
              tick={TickIcon}
              cross={CrossIcon}
              alert={AlertIcon}
              id={marker.id}
              location={marker.name}
              name={marker.name}
              onlineAmount={marker.online}
              offlineAmount={marker.offlines}
              alertAmount={marker.inAlert}
              devices={marker.devices}
              onClick={props.onClick}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default RegionList;
