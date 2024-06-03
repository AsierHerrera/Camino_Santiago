import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import alojamientos from "../../Database/Alojamientos.json";
import icono from "../../../public/img/greenMarker.png";

const icon = new L.Icon({
  iconUrl: icono,
  iconSize: [32, 32],
  iconAnchor: [16, 0], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -12] // Point from which the popup should open relative to the iconAnchor
});

const MapWithRoutes = ({ coordinates, camino }) => {
  const [filteredAlojamientos, setFilteredAlojamientos] = useState([]);
  const [showMarkers, setShowMarkers] = useState(true); // Estado para controlar la visibilidad de los marcadores

  console.log("el camino es", camino);

  useEffect(() => {
    // Filtrar los alojamientos basados en el camino seleccionado
    const alojamientosChinchetas = alojamientos.filter(alojamiento => alojamiento.camino === camino);

    if (alojamientosChinchetas.length === 0) {
      console.log(`No se encontraron alojamientos en el camino ${camino}`);
    }
    console.log("Alojamientos filtrados", alojamientosChinchetas);
    setFilteredAlojamientos(alojamientosChinchetas);
  }, [camino]);

  // Función para alternar la visibilidad de los marcadores
  const toggleMarkers = () => {
    setShowMarkers(!showMarkers);
  };

  return (
    <section className='map'>
      <button onClick={toggleMarkers}>
        {showMarkers ? 'Ocultar Albergues' : 'Mostrar Albergues'}
      </button>
      <MapContainer center={[40.43731467230963, -3.689847347507708]} zoom={6}
        minZoom={6}  // Nivel mínimo de zoom
       // maxZoom={6}  // Nivel máximo de zoom
        style={{ height: '550px', width: '1000px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={coordinates} color="blue" />
        {showMarkers && filteredAlojamientos.map(alojamiento => (
          <Marker
            key={alojamiento.Alojamiento_id}
            position={[alojamiento.latitud, alojamiento.longitud]}
            icon={icon}
          >
            <Popup>
              <strong>{alojamiento.hostalname}</strong><br />
              Precio por noche: {alojamiento.precioNoche}€<br />
              Provincia: {alojamiento.provincia}<br />
              Camas Totales: {alojamiento.camasTotales}<br />
              Camas Ocupadas: {alojamiento.camasocupadas}<br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapWithRoutes;

