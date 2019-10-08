import React, { Component } from "react";
import { Marker, Popup } from "react-map-gl";
import Pin from "./pin";

export const DestinationMarker = props => {
  const { onDragStart, onDrag, onDragEnd } = props;
  return (
    <Marker
      longitude={6.4636}
      latitude={59.6528}
      offsetLeft={-20}
      offsetTop={-10}
      draggable={false}
    >
      <Pin onClick={props.toggle} />
    </Marker>
  );
};
