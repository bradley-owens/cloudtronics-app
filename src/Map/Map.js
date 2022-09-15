import React, { Fragment, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";
import UserWindow from "../UserWindow/UserWindow";
import Service from "../Service/Service";

const markers = [
  {
    id: 1,
    name: "Surry Hills",
    position: { lat: -33.890648, lng: 151.212921 },
    status: false,
    devices: 20,
    inAlert: 12,
    online: 12,
    offline: 8,
    repairing: 6,
    totalLampHours: 123,
    totalPumpHours: 23,
  },
  {
    id: 2,
    name: "Manly",
    position: { lat: -33.7969, lng: 151.285 },
    status: true,
    devices: 10,
    inAlert: 0,
    online: 10,
    offline: 0,
    repairing: 0,
    totalLampHours: 12,
    totalPumpHours: 23,
  },
  {
    id: 3,
    name: "Bondi",
    position: { lat: -33.8915, lng: 151.2767 },
    status: true,
    devices: 6,
    inAlert: 0,
    online: 6,
    offline: 0,
    repairing: 0,
    totalLampHours: 34,
    totalPumpHours: 53,
  },
  {
    id: 4,
    name: "Zetland",
    position: { lat: -33.9073, lng: 151.2077 },
    status: false,
    devices: 14,
    inAlert: 12,
    online: 10,
    offline: 4,
    repairing: 4,
    totalLampHours: 17,
    totalPumpHours: 223,
  },
];

const Map = () => {
  const [allMarkers, setAllMarkers] = useState(markers);

  let totalOnline = 0;
  let totalDevices = 0;
  let totalAlert = 0;
  let totalOffline = 0;
  let totalRepairing = 0;
  let totalLampHours = 0;
  let totalPumpHours = 0;

  totalPumpHours: allMarkers.forEach((marker) => {
    totalOnline += marker.online;
    totalDevices += marker.devices;
    totalAlert += marker.inAlert;
    totalOffline += marker.offline;
    totalRepairing += marker.repairing;
    totalLampHours += marker.totalLampHours;
    totalPumpHours += marker.totalPumpHours;
  });

  const [status, setStatus] = useState({
    online: totalOnline,
    total: totalDevices,
    alert: totalAlert,
    offline: totalOffline,
    repairing: totalRepairing,
    lampHours: totalLampHours,
    pumpHours: totalPumpHours,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAxrrvwuspgkZ7eFGiZJ_AuKDnIRaZkAmI",
  });

  const center = {
    lng: 151.2099,
    lat: -33.865143,
  };

  const circleOptions = {
    strokeOpacity: 0.8,
    strokeWeight: 0.1,
    fillOpacity: 0.1,
  };
  const [showModal, setShowModal] = useState(false);
  const [clickedRegion, setClickedRegion] = useState();

  const hideServiceModal = () => {
    setShowModal(false);
  };

  const clickRegionItemHandler = (event) => {
    setShowModal(true);
  };

  return (
    isLoaded && (
      <Fragment>
        <GoogleMap
          mapContainerStyle={{
            width: "100vw",
            height: "100vh",
            position: "relative",
          }}
          center={center}
          zoom={12}
        >
          <Circle center={center} radius={11000} options={circleOptions} />
          {markers.map((marker) => {
            return (
              <Marker
                key={marker.id}
                name={marker.name}
                position={marker.position}
                icon={
                  !status &&
                  "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                }
              ></Marker>
            );
          })}
          <UserWindow
            markers={allMarkers}
            status={status}
            onClick={clickRegionItemHandler}
          />
          {showModal && <Service onClose={hideServiceModal} />}
        </GoogleMap>
      </Fragment>
    )
  );
};

export default Map;
