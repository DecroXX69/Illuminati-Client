import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapStyles.css'; // Import custom styles

// Custom marker icon
import markerIcon from '../assets/location.png';

const LeafletMap = () => {
  const position = [22.504116454198996, 88.35688941534339]; // Coordinates for Pune, India
  const address = "3rd floor, 162/B/280, opposite Arambagh food mart, Lake Gardens, Kolkata, West Bengal 700045";

  // Define custom icon for the marker
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [40, 40], // Adjust size of the icon
    iconAnchor: [20, 40], // Anchor the icon to the bottom center
    popupAnchor: [0, -40], // Position the popup above the marker
  });

  return (
    <div className="location-container">
        <div className="location-details">
            <h2>ADDRESS :</h2>
            <h3>Kolkata</h3>
            {/* Create a hyperlink for the address */}
            <a href="https://www.google.com/maps/place/ILLUMINATI+Cafe+Sky+Lounge/@22.5039876,88.3568465,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0271e0a42fa319:0x89cc563df2e92a16!8m2!3d22.5039876!4d88.3568465!16s%2Fg%2F11lyn5m0nc?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <p>{address}</p>
  </a>
  
  {/* Display the address as plain text if needed */}
  
  
  <br />
  
  <h2>CONTACT INFO :</h2>
  
  {/* Phone number as a dialable link */}
  <h3>
    Phone: <a href="tel:+911234567890">+91 12345 67890</a>
  </h3>
  
  {/* Email as a clickable mailto link */}
  <h3>
    Email: <a href="mailto:tecmetaverse@gmail.com">tecmetaverse@gmail.com</a>
  </h3>
</div>

      <div className="map-container">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LeafletMap;
