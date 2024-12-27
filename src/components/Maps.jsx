import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapStyles.css'; // Import custom styles

// Custom marker icon
import markerIcon from '../assets/location.png';

const GoogleStreetViewLayer = () => {
  const map = useMap();

  useEffect(() => {
    // Initialize Google Streets layer
    const googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    });

    // Add the Google Streets layer to the map
    googleStreets.addTo(map);

    return () => {
      // Cleanup when the component unmounts
      map.removeLayer(googleStreets);
    };
  }, [map]);

  return null;
};

const LeafletMap = () => {
  const position = [22.504116454198996, 88.35688941534339]; // Coordinates for Kolkata, India
  const address = "3rd floor, 162/B/280, opposite Arambagh food mart, Lake Gardens, Kolkata, West Bengal 700045";

  // Define custom icon for the marker
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [50, 50], // Adjust size of the icon
    iconAnchor: [25, 50], // Anchor the icon to the bottom center
    popupAnchor: [0, -50], // Position the popup above the marker
  });

  return (
    <div className="location-container neon-theme">
      {/* Neon Themed Heading */}
      {/* <h1 className="neon-title">OUR LOCATIONS</h1> */}
      <div className="location-details">
        <h2>ADDRESS:</h2>
        <h3>Kolkata</h3>
        <a
          href="https://www.google.com/maps/place/ILLUMINATI+Cafe+Sky+Lounge/@22.5039876,88.3568465,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0271e0a42fa319:0x89cc563df2e92a16!8m2!3d22.5039876!4d88.3568465!16s%2Fg%2F11lyn5m0nc?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{address}</p>
        </a>
        <br />
        <h2>CONTACT INFO:</h2>
        <h3>
          Phone: <a href="tel:+919073077770">+91 9073077770</a>
        </h3>
        <h3>
          Reservations:{' '}
          <a href="https://www.eazydiner.com/kolkata/illuminati-cafe-sky-lounge-lake-gardens-kolkata-700768">
            ezdiner.com
          </a>
        </h3>
      </div>

      <div className="map-container">
        <MapContainer
          center={position}
          zoom={17}
          style={{ height: '400px', width: '100%' }}
        >
          <GoogleStreetViewLayer />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="popup-content">{address}</div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LeafletMap;