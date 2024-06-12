import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const position = [19.1457475, 73.0120924]; // Replace with your desired location

const customIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30"%3E%3Ccircle cx="10" cy="15" r="7" fill="%23000" /%3E%3Cpath fill="%23F00" d="M10,0c-5.5,0-10,4.5-10,10c0,7.5,10,20,10,20s10-12.5,10-20C20,4.5,15.5,0,10,0z"/%3E%3C/svg%3E', // Replace with the URL to your custom icon
    iconSize: [20, 30], // Adjust size as needed
    iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -38] // Point from which the popup should open relative to the iconAnchor
  });

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
          <div>
              <h3>Advent Chembio Private Limited</h3>
            </div>
            <a href={`https://www.google.com/maps?q=${position[0]},${position[1]}`} target="_blank" rel="noopener noreferrer">
              Click here to view on Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;