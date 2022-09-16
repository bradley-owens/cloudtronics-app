import React, { Fragment, useEffect, useState } from "react";
import styles from "./RegionList.module.css";
import OzoneIcon from "../../Icons/Ozone.svg";
import TickIcon from "../../Icons/Tick.svg";
import CrossIcon from "../../Icons/Cross.svg";
import AlertIcon from "../../Icons/Alert.svg";
import RegionItem from "./RegionItem/RegionItem";
import Service from "../../Service/Service";

const RegionList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [clickedRegion, setClickedRegion] = useState({
    id: "",
  });

  const hideServiceModal = () => {
    setShowModal(false);
  };

  const clickRegionItemHandler = (event) => {
    setShowModal(true);
    setClickedRegion({
      name: event.target.id,
    });
  };

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
              key={Math.random()}
              location={marker.name}
              name={marker.name}
              onlineAmount={marker.online}
              offlineAmount={marker.offlines}
              alertAmount={marker.inAlert}
              devices={marker.devices}
              onClick={clickRegionItemHandler}
            />
          );
        })}

        {showModal && (
          <Service onChoose={clickedRegion} onClose={hideServiceModal} />
        )}
      </div>
    </Fragment>
  );
};

export default RegionList;
